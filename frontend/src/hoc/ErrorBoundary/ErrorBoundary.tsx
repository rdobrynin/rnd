import React, { PureComponent, ReactNode } from 'react';
import { errorHandler } from '@/helpers/errorHandler';

export type ErrorBoundaryProps = {
  FallbackComponent?: ReactNode;
  onError?: (error: Error) => void;
};

// We can't create hook with error boundary https://github.com/facebook/react/issues/14347
export class ErrorBoundary extends PureComponent<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  handleError = (error: Error) => {
    const { onError } = this.props;
    this.setState({
      hasError: true,
    });
    errorHandler(error);
    onError && onError(error);
  };

  componentDidCatch(error: Error) {
    this.handleError(error);
  }

  render() {
    const { hasError } = this.state;

    // eslint-disable-next-line react/prop-types,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line react/prop-types
    const { children, FallbackComponent } = this.props;

    return <>{hasError ? FallbackComponent : children}</>;
  }
}
