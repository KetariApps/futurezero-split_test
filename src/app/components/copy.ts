export const copy = {
  testA: {
    title: "FutureZero - Increase your home's value",
    prompt:
      "How much would your home value increase from a clean energy retrofit?",
  },
  testB: {
    title: "FutureZero - Reduce your home's carbon impact",
    prompt:
      "How much could you reduce your home's C02 emissions with a clean energy retrofit?",
  },
  howItWorks:
    "Simply input your home address and your email address to receive a free estimate.",
  aboutUs:
    "FutureZero is a real estate technology startup that helps homeowners increase the health and value of their homes through net zero energy upgrades.",
  components: {
    intakeForm: {
      fields: {
        address: {
          placeholder: "Enter the address of your home",
          errorMessage: "Please enter the address of your home",
        },
        email: {
          placeholder: "your@email.com",
          errorMessage: "Enter a valid email address.",
        },
        optIn: "I want to learn how to complete a deep energy retrofit.",
      },
      alertMessage: {
        main: "By submitting this form, you agree to the",
        link: "terms",
      },
      submitButton: "Analyze my home",
    },
  },
};
