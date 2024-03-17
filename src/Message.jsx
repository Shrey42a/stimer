import React from "react";

function Message() {
  window.onload = function () {
    document.getElementById("autoPlay").play();
  }

  return (
    <>
      <audio id="autoPlay" loop>
        <source src="/Amor.mp3" type="audio/mpeg"></source>
      </audio> 
      <video autoPlay loop muted id="video">
        <source src="/Main.mp4" type="video/mp4" />
      </video>
      <div className="hidden bg3 bg-cover bg-center md:flex lg:flex items-center justify-center hi">
        <body className="container h-full border-t-transparent w-full bd1">
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_fJ7CVd.json" background="transparent" speed="1" class="tuturi" loop autoplay></lottie-player>
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_fJ7CVd.json" background="transparent" speed="1" class="tuturi tuturi-2" loop autoplay></lottie-player>
          <div className="dates-container">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_9xgG23.json" background="transparent" speed=".5" class="day-one f-day" loop autoplay></lottie-player>
            <div className="date-no day ro text font-mono text-emerald-400 "></div>
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_9xgG23.json" background="transparent" speed=".5" class="day-two f-day" loop autoplay></lottie-player>
            <div className="date-no2 mouth ro font-mono text-emerald-400 text"></div>
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_9xgG23.json" background="transparent" speed=".5" class="celeb" loop autoplay></lottie-player>
          </div>
          <i className='bx bxs-rocket rocket rocket-one'></i>
          <i className='bx bxs-rocket rocket-two'></i>
          <i className='bx bxs-rocket rocket-three'></i>
          <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_5hufvwkz.json" background="transparent" speed="1" class="lottie-firework" loop autoplay></lottie-player>
        </body>
      </div>
      </>
  )
}
export default Message;