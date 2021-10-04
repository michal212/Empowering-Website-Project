import React, { useState, useEffect } from 'react';
import { getAllCampagins } from "../../../service/newsletter-service";

import './Newsletter.css';

const Newsletter = () => {
  const [campagins1, setCampagins] = useState([]);
  const getCampagins = () => {
    setCampagins(getAllCampagins());
  }
  console.log(campagins1, "campagins");
  const campaigns = [
    {
      iframe:
        "https://us5.campaign-archive.com/?u=4c2830c704079978d3ed5f940&id=a0a46a5859",
      id: 0,
    },
    {
      iframe: "https://yehudabayana.github.io/my-spotify/#/",
      id: 1,
    },
    {
      iframe: "https://yehudabayana.github.io/portfolio/",
      id: 2,
    },
    {
      iframe: "https://yehudabayana.github.io/my-order/",
      id: 3,
    },
    {
      iframe: "https://yehudabayana.github.io/frontfolio/",
      id: 4,
    },
  ];
  const [visible, setVisible] = useState(false);
  const [iframeSelected, setIframeSelected] = useState({});
  const showIframe = (id) => {
    setVisible(true);
    setIframeSelected(() => campaigns.find((campaign) => campaign.id === id));
  };
  return (
    <>
      <div className="campaign-T">
        {campaigns.map((campaign) => {
          return (
            <>
              <h3 onClick={() => showIframe(campaign.id)}>
                ניזולטר {campaign.id + 1}
                <ArrowDownOutlined style={{ background: "white", width: "30px", height: "30px", borderRadius: "100%" }} />
              </h3>
            </>
          );
        })}
      </div>
      {
        visible && (
          <div className="iframe">
            <iframe
              src={iframeSelected.iframe}
              width="100%"
              height="500px"
              frameborder="0"
            ></iframe>
          </div>
        )
      }
    </>
  );
};

export default Newsletter;
