
// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props:{children: React.ReactNode}) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.    
//     return { hasError: true };  
// }
//   componentDidCatch(error, errorInfo) {    // You can also log the error to an error reporting service    

// }
//   render() {
//     if (this.state.hasError) {      // You can render any custom fallback UI      
//         return <h1>Something went wrong.</h1>;    }
//     return this.props.children; 
//   }
// }

// export default ErrorBoundary;

import React, { Component, ErrorInfo, ReactNode } from "react";
 import {MoviesContent} from 'movie-content';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <MoviesContent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

