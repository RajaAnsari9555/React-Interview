import React from "react";

const Setting = ({ data, setData }) => {
  const { theme } = data;

  const handleThemeChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  };

  return (
    <div>
      <h3>Theme Settings</h3>

      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        Dark
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={handleThemeChange}
        />
        Light
      </label>
    </div>
  );
};

export default Setting;
