// const u = e => {
//     if (e.validity.valid)
//       return "";
//     if (e.name === "customerFirstName" && e.validity.valueMissing)
//       return "Please enter your first name. (This field is required.)";
//     if (e.name === "customerLastName" && e.validity.valueMissing)
//       return "Please enter your last name. (This field is required.)";
//     if (e.name === "customerEmail") {
//       if (e.validity.valueMissing)
//         return "Please enter an email address. (This field is required.)";
//       if (e.validity.typeMismatch)
//         return "Please enter a valid email address."
//     }
//     if (e.name === "purchaseDate") {
//       if (e.validity.valueMissing)
//         return "Please enter a purchase date. (This field is required.)";
//       if (e.validity.typeMismatch)
//         return "Please enter a valid purchase date.";
//       if (e.validity.rangeUnderflow)
//         return "The purchase date must be within the last 10 years.";
//       if (e.validity.rangeOverflow)
//         return "The purchase date cannot be a future date."
//     }
//     if (e.name === "demoUrl") {
//       if (e.validity.valueMissing)
//         return "Please enter a URL. (This field is required.)";
//       if (e.validity.typeMismatch)
//         return "Please enter a valid URL."
//     }
//     if (e.name === "demoTooShort") {
//       if (e.validity.valueMissing)
//         return "Please enter a text value. (This field is required.)";
//       if (e.validity.tooShort) {
//         const t = e.getAttribute("minLength"),
//           i = Number(t) - e.value.length;
//         return `Please enter at least ${t} characters. (Add ${i} more ${i === 1 ? "character" : "characters"}.)`
//       }
//     }
//     if (e.name === "demoTooLong" && e.validity.tooLong)
//       return `Please shorten this text to a maximum of ${e.getAttribute("maxLength")} characters. It currently exceeds that limit.`;
//     if (e.name === "demoRangeEven") {
//       if (e.validity.valueMissing)
//         return "Please enter a number. (This field is required.)";
//       if (e.validity.badInput)
//         return "Please enter a valid number value.";
//       if (e.validity.rangeUnderflow || e.validity.rangeOverflow || e.validity.stepMismatch)
//         return `The value should be an even number between ${e.getAttribute("min")} and ${e.getAttribute("max")}.`
//     }
//     if (e.name === "demoRangeOdd") {
//       if (e.validity.valueMissing)
//         return "Please enter a number. (This field is required.)";
//       if (e.validity.badInput)
//         return "Please enter a valid number value.";
//       if (e.validity.rangeUnderflow || e.validity.rangeOverflow || e.validity.stepMismatch)
//         return `The value should be an odd number between ${e.getAttribute("min")} and ${e.getAttribute("max")}.`
//     }
//     if (e.name === "demoPattern") {
//       if (e.validity.tooShort || e.validity.tooLong)
//         return "The code should be between 3 and 5 digits long.";
//       if (e.validity.patternMismatch)
//         return "Please enter a valid 3-5 digit (number) code."
//     }
//     return e.validationMessage
//   },
//   n = e => {
//     const t = e.checkValidity();
//     !e.required && e.value === "" && t ? e.classList.remove("is-valid", "is-invalid") : (e.classList.toggle("is-valid", t),
//         e.classList.toggle("is-invalid", !t)),
//       e.setAttribute("aria-invalid", String(!t));
//     const i = window.location.pathname.includes("part-4") ? u(e) : e.validationMessage,
//       a = e.nextElementSibling;
//     a.textContent = i,
//       a.hidden = t
//   },
//   o = e => {
//     if (window.location.pathname.includes("part-2"))
//       return console.log('Skipping "interests" checkbox group validation.'),
//         !0;
//     const t = document.querySelector(".js-checkbox-fieldset");
//     if (!t)
//       return !0;
//     console.log('Validate the "interests" checkbox group');
//     const i = document.querySelectorAll('input[name="interests"]'),
//       a = document.querySelector(".js-interests-legend-error"),
//       s = document.querySelector(".js-interests-visual-error"),
//       r = new FormData(e).getAll("interests").length > 0;
//     t.classList.toggle("is-valid", r),
//       t.classList.toggle("is-invalid", !r),
//       t.setAttribute("aria-invalid", String(!r));
//     for (const l of i)
//       l.classList.toggle("is-valid", r),
//       l.classList.toggle("is-invalid", !r);
//     const d = r ? "" : "Please select at least one interest.";
//     return a.textContent = d,
//       s.textContent = d,
//       s.hidden = r,
//       r
//   },
//   v = e => {
//     const t = e.target;
//     document.querySelectorAll(".js-validate").forEach(n);
//     const i = t.checkValidity(),
//       a = o(t);
//     (!i || !a) && e.preventDefault(),
//       t.querySelector("input:invalid, fieldset.is-invalid input") ? .focus()
//   },
//   m = () => {
//     const e = document.querySelector("#demo-form");
//     return e.setAttribute("novalidate", ""),
//       e.addEventListener("submit", v),
//       e
//   },
//   f = e => {
//     const t = e.querySelectorAll('input[name="interests"]');
//     for (const a of t)
//       a.addEventListener("change", () => o(e)),
//       a.addEventListener("blur", s => {
//         s.relatedTarget ? .getAttribute("name") !== "interests" && o(e)
//       });
//     document.querySelectorAll('input[name="interests"]:checked').length > 0 && o(e)
//   },
//   g = () => {
//     const e = document.querySelectorAll(".js-validate");
//     for (const t of e)
//       t.addEventListener("input", i => n(i.target)),
//       t.addEventListener("blur", i => n(i.target)),
//       t.setAttribute("aria-invalid", "false"),
//       t.value !== "" && n(t)
//   },
//   h = () => {
//     document.body.dataset.jsEnabled = "true";
//     const e = m();
//     g(),
//       f(e)
//   };
// export {
//   h as i
// };
