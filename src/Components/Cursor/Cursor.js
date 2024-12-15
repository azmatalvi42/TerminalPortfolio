import React from "react";
import "./Cursor.css"; // Importing the CSS file for styling the Cursor component

// Define the Cursor component as a React class component
class Cursor extends React.Component {
  // Constructor to initialize the component state
  constructor(props) {
    super(props); // Call the parent class constructor
    this.state = {
      cursorChar: "█", // The character displayed as the cursor
      timeToUpdate: 500, // Time interval (in milliseconds) for toggling the cursor visibility
      cursorOnStatus: true, // Current status of the cursor (visible or hidden)
      opacity: 100, // Opacity percentage of the cursor (100 for visible, 0 for hidden)
    };
  }

  // Function to update the cursor's visibility state
  setCursorStatus = (is_on) => {
    if (is_on) {
      this.setState({
        cursorOnStatus: true, // Set cursor as visible
        opacity: 100, // Set opacity to fully visible
      });
    } else {
      this.setState({
        cursorOnStatus: false, // Set cursor as hidden
        opacity: 0, // Set opacity to fully hidden
      });
    }
  };

  // Function to toggle the cursor's visibility state
  changeCursorState = () => {
    this.setCursorStatus(!this.state.cursorOnStatus); // Invert the current cursor status
  };

  // React lifecycle method that runs after the component is mounted to the DOM
  componentDidMount = () => {
    // Set up an interval to periodically toggle the cursor visibility
    this.interval = setInterval(() => {
      this.changeCursorState();
    }, this.state.timeToUpdate); // Interval is based on the timeToUpdate state value
  };

  // React lifecycle method that runs before the component is removed from the DOM
  componentWillUnmount = () => {
    clearInterval(this.interval); // Clear the interval to prevent memory leaks
  };

  // Render method to define the JSX for the Cursor component
  render() {
    let opacity = String(this.state.opacity) + "%"; // Convert opacity value to a percentage string
    return (
      <strong
        id="cursor" // Assign an ID for potential styling or targeting
        style={{ opacity: opacity }} // Inline style to control cursor visibility
      >
        {this.state.cursorChar} {/* Render the cursor character */}
      </strong>
    );
  }
}

// Export the Cursor component for use in other parts of the application
export default Cursor;
