import React ,{useState} from "react";
import { Collapse } from "antd";
import PlusIcon from "../../assets/svg/plus";
const { Panel } = Collapse;

export default function Accordion() {
  const [open, setOpen] = useState([]);
  const handleSubmit = e => {
    // e.preventDefault();
    console.log("band karrrr")
    setOpen([]);
  };

  const callback = (key) => {
    console.log(key);
  };

  return (
    <Collapse activeKey={open} onChange={() => setOpen(prev => [1])}>
      <Panel
        showArrow={false}
        onChange={() => setOpen(prev => [1])}
        header={<Header />}
        key="1"
        className="site-collapse-custom-panel"
      >
        <p className={`f5 regular-font  mv0  `}>
          We bring the experience wherever you connect with your customers. We
          create websites that earn, brands that are seen and strategies that
          work. The best result comes when emotions merge with data, technology
          with design and your company with ours.
        </p>

        <div className="flex" onClick={()=> setOpen([])}>
          <PlusIcon />
          <span className="pl2 view-text  clr-01051f f5 medium-font">
            VIEW LESS
          </span>
        </div>
      </Panel>
    </Collapse>
  );
}

function Header() {
  return (
    <div className="flex">
      <PlusIcon />
      <span className="pl2 view-text  clr-01051f f5 medium-font">
        VIEW MORE
      </span>
    </div>
  );
}
