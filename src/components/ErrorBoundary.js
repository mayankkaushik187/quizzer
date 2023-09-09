import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true });
		// You can log the error or perform any other actions here
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Render an error message or fallback UI
			return <div>[Component Error]</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
