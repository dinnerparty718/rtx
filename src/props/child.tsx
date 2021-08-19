interface ChildProp {
  color: string;
}

const Child = ({ color }: ChildProp) => {
  return <div>{color}</div>;
};

export default Child;
