# Register Page — Feature List

---

## Layout

- Two column card design — left side image, right side form
- Left side shows a dark mountain illustration (`piccii.png`)
- Image is hidden on mobile, full form shows instead
- Card is centered on the page with a soft shadow and rounded corners
- Responsive across desktop, laptop, tablet and mobile

---

## Form Fields

- **Email ID** — text input for email address
- **Password** — password input with show/hide toggle
- **Confirm Password** — password input with show/hide toggle

---

## Validation

- Errors are computed live on every render (not stored in state)
- Errors only show after the user touches a field (clicks into it and leaves) or clicks Register
- Each field has its own error message shown below it in red

| Field | Rules |
|---|---|
| Email | Cannot be empty. Must be valid email format (example@mail.com) |
| Password | Cannot be empty. Must be at least 8 characters |
| Confirm Password | Cannot be empty. Must match the Password field |

---

## Show / Hide Password

- Eye icon appears only when the user has typed something in the field
- Clicking the eye icon toggles between showing and hiding the password
- Works independently on both Password and Confirm Password fields
- Browser's built-in password reveal icon is hidden via CSS so only one icon shows

---

## Register Button

- Disabled (gray) when the form has any validation errors
- Active (black) only when all fields are valid
- Shows a loading spinner for 1 second after clicking
- Navigates to `/otp` page after the loading completes

---

## Navigation

- "Already have an account? Login" link at the bottom
- Login link navigates to `/login` page using React Router

---

## State Used

```js
email              // stores email input value
password           // stores password input value
confirmPassword    // stores confirm password input value
showPassword       // toggles password visibility
showConfirmPassword // toggles confirm password visibility
touched            // tracks which fields the user has interacted with
submitted          // true after first submit attempt
loading            // true during the 1 second simulated load
```

---

