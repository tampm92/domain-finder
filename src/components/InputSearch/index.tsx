import { useState } from "react";
import { Input, AutoComplete } from "antd";
import { SelectProps } from "antd/es/select";
import { AudioOutlined } from "@ant-design/icons";
import style from "./InputSearch.module.scss";

const { Search } = Input;

const createEndingsSuggestion = (value: string) => {
  if (!value || value.includes(".")) {
    return [];
  }
  const endings = [".com", ".io", ".org", ".net"];
  return endings.map((ending) => {
    const domain = value + ending;
    return { value: domain, label: domain };
  });
};

export default ({ onSearch, ...props }) => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearchAutoComplete = (value: string) => {
    setOptions(createEndingsSuggestion(value));
  };

  return (
    <span className={style.inputSearch}>
      <AutoComplete
        options={options}
        onSelect={onSearch}
        onSearch={handleSearchAutoComplete}
      >
        <Search
          placeholder="Search for your new domain"
          onSearch={onSearch}
          enterButton
        />
      </AutoComplete>
    </span>
  );
};
