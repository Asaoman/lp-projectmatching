import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-red-500 p-8 font-mono">
                    <h1 className="text-2xl mb-4">CRITICAL SYSTEM FAILURE</h1>
                    <div className="border border-red-900 bg-red-900/10 p-4 rounded">
                        <p className="font-bold mb-2">{this.state.error && this.state.error.toString()}</p>
                        <pre className="text-xs overflow-auto max-h-[50vh]">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-4 py-2 border border-red-500 hover:bg-red-500 hover:text-black transition-colors"
                    >
                        REBOOT SYSTEM
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
