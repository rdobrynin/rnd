import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import {RateController} from "../../src/modules/Rate/rate.controller";
import {RateService} from "../../src/modules/Rate/rate.service";
import {RateCurrencyDto} from "../../src/modules/Rate/dto/rate-currency.dto";
import {RatePairDataDto} from "../../src/modules/Rate/dto/rate-pair-data.dto";

describe('RateController', () => {
  let controller: RateController;
  let service: RateService;

  const rateCurrencyDto: RateCurrencyDto = {
    data: [
      {
        symbol: "USDT",
        name: "Tether",
      }
    ]
  }

  const ratePairDataDto: RatePairDataDto = {
    data: {
      from: "USDT",
      to: "Tether",
      price: 7777,
      updated: new Date('2024-11-24T23:34:06.000Z'),
    }
  }

  const mockservice: Partial<RateService> = {
    getCrypto: jest.fn().mockResolvedValue(rateCurrencyDto),
    getPairs: jest.fn().mockResolvedValue(ratePairDataDto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateController],
      providers: [{ provide: RateService, useValue: mockservice }],
    })
      .compile();

    controller = module.get<RateController>(RateController);
    service = module.get<RateService>(RateService);
  });

  describe('getCrypto', () => {
    it('should get list of crypto currencies', async () => {
      const result = await controller.getCrypto();
      expect(result).toEqual(rateCurrencyDto);
    });
  });

  describe('getPairs', () => {
    it('should get rate', async () => {
      const result = await controller.getPairs({from: 'USDT', to: 'TO'});
      expect(result).toEqual(ratePairDataDto);
    });
  });
});
