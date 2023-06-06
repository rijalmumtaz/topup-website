import Input, { InputProps } from "../../../../components/atoms/Input";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Atom/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Nama",
};
