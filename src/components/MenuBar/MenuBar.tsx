import classNames from "classnames";

interface Props {
  isMobile?: boolean;
  options: any[];
}

function MenuBar(props: Props) {
  const { isMobile, options} = props;

  const renderOptions = (item: any, index: number) => {
    return(
      <span key={index}>{item}</span>
    )
  }

  return (
    <div className={classNames(["menubar-container",],{
      "menubar-container-mobile": isMobile
    })}>{options.map(renderOptions)}</div>
  )
}

export default MenuBar
