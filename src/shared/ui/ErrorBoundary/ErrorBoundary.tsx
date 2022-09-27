import { Component, ErrorInfo, ReactElement } from 'react';

interface IErrorBoundaryProps {
  children: ReactElement
  errorComponent: ReactElement
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children, errorComponent } = this.props;

    if (hasError) {
      return errorComponent;
    }

    return children;
  }
}
