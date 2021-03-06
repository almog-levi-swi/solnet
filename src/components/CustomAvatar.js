import React from "react";
import { Avatar, Tooltip } from "antd";

const CustomAvatar = ({ firstName, lastName, date }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <Tooltip
      title={`${firstName} ${lastName} ${date}`}
      placement="top"
      overlayStyle={{ maxWidth: "250px" }}
      color={"grey"}
    >
      <Avatar style={{ backgroundColor: `#${randomColor}` }}>
        {firstName}
      </Avatar>
    </Tooltip>
  );
};

export default CustomAvatar;
