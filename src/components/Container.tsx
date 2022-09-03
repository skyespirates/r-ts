type Props = {
  children: JSX.Element;
};
function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}

export default Container;
