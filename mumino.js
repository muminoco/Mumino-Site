// window.addEventListener("DOMContentLoaded", (event) => {
//   let pageTransition = function () {
//     gsap.to(".transition", {
//       opacity: 0,
//       duration: 0.75,
//       ease: "power3.out",
//       onComplete: () => {
//         gsap.set(".transition", { display: "none" });
//       },
//     });

//     $("a").on("click", function (e) {
//       if (
//         $(this).prop("hostname") === window.location.host &&
//         $(this).attr("href").indexOf("#") === -1 &&
//         $(this).attr("target") !== "_blank"
//       ) {
//         e.preventDefault();
//         let destination = $(this).attr("href");
//         gsap.set(".transition", { display: "block" });
//         gsap.fromTo(
//           ".transition",
//           {
//             opacity: 0,
//           },
//           {
//             opacity: 1,
//             duration: 0.2,
//             ease: "power4.out",
//             onComplete: () => {
//               window.location = destination;
//             },
//           }
//         );
//       }
//     });

//     // On Back Button Tap
//     window.onpageshow = function (event) {
//       if (event.persisted) {
//         window.location.reload();
//       }
//     };
//   };
//   pageTransition();

//   let navbarHide = function () {
//     let lastScrollTop = 0;
//     const navbar = document.querySelector(".navbar_component");

//     window.addEventListener(
//       "scroll",
//       function () {
//         let currentScroll =
//           window.pageYOffset || document.documentElement.scrollTop;

//         if (currentScroll > lastScrollTop) {
//           // Scrolling down
//           navbar.style.transform = "translateY(-100%)";
//           navbar.style.transition = "transform 0.3s ease-in-out";
//         } else {
//           // Scrolling up
//           navbar.style.transform = "translateY(0)";
//         }
//         lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
//       },
//       false
//     );
//   };

//   navbarHide();

//   const letterFade = $("[ani='letter-fade']");
//   const maskUp = $("[ani='mask-up']");
//   const fade = $("[ani='fade']");

//   const serviceItem = $(".home-services_item");
//   const worksItem = $(".works_item");

//   let textSplit = function () {
//     let fadeSplit = new SplitType(letterFade, {
//       types: "words, chars",
//     });

//     let maskSplit = new SplitType(maskUp, {
//       types: "lines, words",
//     });
//   };

//   textSplit();

//   // Reusable Scrolltrigger
//   function createScrollTrigger(triggerElement, timeline) {
//     // Resets the animation once the bottom of element leaves the top of the screen
//     ScrollTrigger.create({
//       trigger: triggerElement,
//       start: "top bottom",
//       markers: false,
//       onLeaveBack: () => {
//         timeline.progress(0);
//         timeline.pause();
//       },
//     });

//     // Plays the animation once the element enters screen & also when it enters from the top
//     ScrollTrigger.create({
//       trigger: triggerElement,
//       start: "top 90%",
//       end: "bottom top",
//       markers: false,
//       onEnter: () => {
//         timeline.play();
//       },
//       onEnterBack: () => {
//         timeline.restart();
//       },
//     });
//   }

//   let maskUpAnimation = function () {
//     maskUp.each(function (index) {
//       let target = $(this);
//       let targetLine = target.find(".line");

//       let tl = gsap.timeline({ paused: true });
//       createScrollTrigger(target, tl);

//       tl.set(target, { overflow: "hidden" });
//       tl.from(targetLine, {
//         color: "#0c5b78",
//         yPercent: 100,
//         opacity: 0,
//         duration: 0.75,
//         ease: "power1.out",
//         stagger: 0.1,
//       });
//     });
//   };

//   let letterFadeAnimation = function () {
//     letterFade.each(function (index) {
//       let target = $(this);
//       let targetChar = target.find(".char");

//       let tl = gsap.timeline({ paused: true });
//       createScrollTrigger(target, tl);

//       tl.from(targetChar, {
//         color: "#0c5b78",

//         opacity: 0.1,
//         duration: 1,
//         stagger: 0.03,
//         ease: "power1.out",
//       });
//     });
//   };

//   let fadeAnimation = function () {
//     fade.each(function (index) {
//       let target = $(this);
//       let tl = gsap.timeline({ paused: true });
//       createScrollTrigger(target, tl);

//       tl.from(target, {
//         opacity: 0,
//         yPercent: 10,
//         filter: "blur(2px)",
//         duration: 0.5,
//       });
//     });
//   };

//   let servicesAnimation = function () {
//     serviceItem.each(function (index) {
//       let target = $(this).find(".home-services_list-wrapper");
//       let targetList = target.find(".home-services_list-text");

//       let tl = gsap.timeline({ paused: true });
//       createScrollTrigger(target, tl);

//       tl.from(targetList, {
//         opacity: 0,
//         yPercent: 50,
//         duration: 0.75,
//         stagger: 0.1,
//       });
//     });
//   };

//   let workAnimation = function () {
//     worksItem.each(function (index) {
//       let target = $(this);
//       let targetVisuals = $(this).find(".works_item-visuals");
//       let targetText = target.find(".works_item-text-header");
//       let targetList = target.find(".tags_list");

//       let visualsTl = gsap.timeline({ paused: true });
//       let textTl = gsap.timeline({ paused: true });
//       let listTl = gsap.timeline({ paused: true });

//       createScrollTrigger(targetVisuals, visualsTl);
//       createScrollTrigger(targetText, textTl);
//       createScrollTrigger(targetList, listTl);

//       visualsTl.from(targetVisuals, {
//         opacity: 0,
//         duration: 1,
//         ease: "power1.out",
//       });

//       textTl.from(targetText, {
//         filter: "blur(2px)",
//         duration: 0.75,
//       });

//       listTl.from(targetList.find(".tags_list-item"), {
//         opacity: 0,
//         xPercent: 50,
//         duration: 0.75,
//         stagger: 0.2,
//       });
//     });
//   };

//   workAnimation();
//   fadeAnimation();
//   servicesAnimation();
//   maskUpAnimation();
//   letterFadeAnimation();
// });
