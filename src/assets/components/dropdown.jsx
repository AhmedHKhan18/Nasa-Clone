import { Dropdown } from "flowbite-react";

export default function dropdown({item}) {
    const customTheme = {
        "inlineWrapper": "text-white text-2xl w-[12vw]"
    }
        return (
    <Dropdown label={item} theme={customTheme} inline className="bg-black text-white">
      <Dropdown.Item>All Nasa News</Dropdown.Item>
      <Dropdown.Item>Podcast</Dropdown.Item>
      <Dropdown.Item>Blogs</Dropdown.Item>
      <Dropdown.Item>News letters</Dropdown.Item>
    </Dropdown>
  );
}
