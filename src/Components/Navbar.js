import React from "react";
import Select from "react-select";
import "../Styles/Navbar.css";

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: "#ec9898", // Change background color here
//     width: 200, // Example width, adjust as needed
//   }),
//   // Add more custom styles as needed
// };

const Navbar = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];
  return (
    <div className="navbar">
      <h1>Code Collab Hub</h1>
      <div className="select">
        <Select
          options={languages}
          value={userLang}
          onChange={(e) => setUserLang(e.value)}
          placeholder={userLang}
		//   styles={customStyles}
        />
      </div>

      <div className="select">
        <Select
          options={themes}
          value={userTheme}
          onChange={(e) => setUserTheme(e.value)}
          placeholder={userTheme}
		//   styles={customStyles}
        />
      </div>

      <label>Font Size</label>
      <input
        type="range"
        min="18"
        max="30"
        value={fontSize}
        step="2"
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      />
    </div>
  );
};

export default Navbar;
