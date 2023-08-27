import { Avatar, Col, Space } from "antd";
import { FooterWrapper, TextFooter } from "./style";

const Footer = () => {
  return (
    <FooterWrapper className="container">
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        className="flex justify-start items-center mb:hidden"
      >
        <TextFooter>Social media</TextFooter>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="flex justify-end">
        <Space>
          <Avatar src="https://res.cloudinary.com/dvzingci9/image/upload/v1692513986/Personal_Branding/footer/Skype_antigf.png" />
          <Avatar src="https://res.cloudinary.com/dvzingci9/image/upload/v1692513986/Personal_Branding/footer/Figma_jhnm8y.png" />
          <Avatar src="https://res.cloudinary.com/dvzingci9/image/upload/v1692513986/Personal_Branding/footer/Facebook_Messenger_eobmio.png" />
          <Avatar src="https://res.cloudinary.com/dvzingci9/image/upload/v1692513986/Personal_Branding/footer/LinkedIn_wyxne6.png" />
          <Avatar src="https://res.cloudinary.com/dvzingci9/image/upload/v1692513986/Personal_Branding/footer/Github_z4xpcl.png" />
          <Avatar src="https://res.cloudinary.com/dvzingci9/image/upload/v1692513986/Personal_Branding/footer/Facebook_sa4kok.png" />
        </Space>
      </Col>
    </FooterWrapper>
  );
};

export default Footer;
