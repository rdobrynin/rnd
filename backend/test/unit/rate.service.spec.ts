import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import {RateService} from "../../src/modules/Rate/rate.service";
import {CoinMarketService} from "../../src/modules/coin-market/coin-market.service";
import {CoinMarketPayload} from "../../src/modules/coin-market/dto/coin-market.payload";
import {ConfigService} from "@nestjs/config";

jest.unmock('lodash');

jest.mock('typeorm-transactional', () => ({
  Transactional: () => () => ({}),
  BaseRepository: class {},
  runOnTransactionCommit: jest.fn(),
  runOnTransactionRollback: jest.fn(),
  runOnTransactionComplete: jest.fn(),
}));

describe('RateService', () => {
  let service: RateService;

  const coinMarketPayloads: CoinMarketPayload[] = [
    {
      symbol: 'USDT',
      name: 'Tether',
    }
  ]

  const mockCoinMarketService: Partial<CoinMarketService> = {
    getCurrencies: jest.fn().mockResolvedValue(coinMarketPayloads),
  };

  const mockCacheManager = {
    set: jest.fn(),
    del: jest.fn(),
    get: jest.fn().mockResolvedValue(`${'USDT'}-${'TON'}`),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RateService,
        ConfigService,
        { provide: 'CACHE_MANAGER', useValue: mockCacheManager },
        { provide: CoinMarketService, useValue: mockCoinMarketService },
      ],
    }).compile();

    service = module.get<RateService>(RateService);
  });

  describe('getCrypto', () => {
    it('should get list of crypto', async () => {
      const result = await service.getCrypto();

      expect(result).toEqual(coinMarketPayloads);
    });
  });
});
