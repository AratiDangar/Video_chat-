import Navbar from "./Navbar";

import gif from '../src/assets/videochat4.gif'
function About() {
  return (
    <>
      <Navbar />
      <div style={{}}>
      <div className="container mx-auto">  <p className=" text-bold pt-4 pl-4 pr-4 flex flex-col items-center justify-center text-black">
          Video conferencing is live, visual connection between two or more
          remote parties over the internet that simulates a face-to-face
          meeting. Video conferencing is important because it joins people who
          would not normally be able to form a face-to-face connection. At its
          simplest, video conferencing provides transmission of static images
          and text between two locations. At its most sophisticated, it provides
          transmission of full-motion video images and high-quality audio
          between multiple locations. In the business world, desktop video
          conferencing is a core component of unified communications platforms
          that also include calling and messaging capabilities. Standalone
          on-premises and cloud-based video conferencing platforms are also
          available from numerous vendors who support desktop- and room-based
          video, as well as the ability to embed video conferencing into
          business applications, such as Telehealth, customer service and
          distance learning. The widespread availability of cloud-based services
          enables organizations to implement video conferencing with minimal
          upfront investment and to take advantage of rapidly emerging
          AI-powered features to improve audio and video performance.
  </p>

<img src={gif} alt="ufuyf" style={{display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  bottom:"0",
  width:' 25%'}} className="pt-10"></img>
  </div>
      </div>
    </>
  );
}

export default About;
//