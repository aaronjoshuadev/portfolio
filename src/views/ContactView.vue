<template>
  <header class="bg-gray-800 py-10">
    <!-- Title Section -->
    <div
      class="px-6 md:px-14 text-center md:text-left text-2xl font-bold text-white mb-5 flex items-center justify-center md:justify-start fadein-bot fadein-3"
    >
      <span>Contact&nbsp;</span>
      <div
        class="h-[2px] w-24 md:w-96 bg-gray-500"
        data-aos="zoom-in-left"
        data-aos-duration="600"
      ></div>
    </div>

    <!-- Main Heading -->
    <p
      class="px-6 md:px-14 text-center md:text-left text-5xl md:text-5xl font-bold text-white fadein-bot fadein-3"
    >
      CONNECT
    </p>

    <!-- Contact Card -->
    <div
      class="mx-6 md:mx-16 mt-5 p-6 md:p-12 border border-gray-600 rounded-2xl shadow-xl text-white fadein-bot fadein-3"
    >
      <div class="text-center md:text-left space-y-4">
        <p class="text-2xl font-bold fadein-bot fadein-3">Get in touch, let's talk</p>
        <p class="text-lg fadein-bot fadein-3">
          Feel free to send me an
          <a
            href="mailto:maureal.aaron@gmail.com"
            class="text-blue-400 underline font-bold"
            >email</a
          >
          if you have any questions, concerns, or simply want to get in touch.
        </p>
        <p
          class="text-lg font-semibold break-words fadein-bot fadein-3"
        >
          <a
            href="mailto:maureal.aaron@gmail.com"
            class="text-blue-400 hover:underline"
            >maureal.aaron@gmail.com</a
          >
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Define the fade-in animation */
@keyframes fadeInBot {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Moves the element from below */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Element stays in its original position */
  }
}

/* Apply the animation */
.fadein-bot {
  animation: fadeInBot 1s ease-out forwards; /* Adjust timing and easing as needed */
}

/* Add delay to each element using a unique class */
.fadein-3 {
  animation-delay: 0.3s; /* Delay for 0.3 seconds */
}
</style>

<style scoped>
header {
  background-color: #141414; /* Tailwind Gray-800 */
}

a {
  text-decoration: none;
  color: #60a5fa; /* Tailwind Blue-400 */
}

a:hover {
  text-decoration: underline;
}

.break-words {
  word-break: break-word; /* Ensures text wraps correctly */
}

.shadow-xl {
  box-shadow: 0 10px 15px rgba(255, 255, 255, 0.3); /* Adds a soft shadow for a card-like effect */
}

p {
  margin: 0;
}
</style>
