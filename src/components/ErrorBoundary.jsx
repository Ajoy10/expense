import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <h1 style={{ fontSize: "36px", textAlign: "center" }}>
            Oops! Something went wrong
          </h1>
          <p
            style={{ fontSize: "18px", textAlign: "center", margin: "20px 0" }}
          >
            We're sorry, but it looks like there's an issue with the website. To
            resolve the issue, please try the following steps:
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              textAlign: "center",
            }}
          >
            <li style={{ margin: "20px 0", fontSize: "16px" }}>
              Ensure that you're not using Firefox Private Browser mode, as this
              mode uses IndexedDB and can cause issues with the website.
            </li>
            <li style={{ margin: "20px 0", fontSize: "16px" }}>
              Clear your browser cache and cookies, then try accessing the
              website again.
            </li>
            <li style={{ margin: "20px 0", fontSize: "16px" }}>
              Try using a different browser to see if the issue persists.
            </li>
          </ul>
        </div>
      );
    }
    return this.props.children;
  }
}
