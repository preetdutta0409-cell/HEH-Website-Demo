# HEH Coaching Centre Website

A responsive, multi-page website for HEH Coaching Centre in New Delhi. The site introduces the centre, presents its academic offerings, and gives prospective students ways to make contact.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | [`index.html`](index.html) | Centre overview and featured course areas |
| Courses | [`courses.html`](courses.html) | School, commerce, B.Com, and NET study options |
| About | [`about.html`](about.html) | Information about the centre |
| Faculty | [`faculty.html`](faculty.html) | Faculty information |
| Results | [`results.html`](results.html) | Results and student testimonials |
| Gallery | [`gallery.html`](gallery.html) | Centre and learning photos |
| Contact | [`contact.html`](contact.html) | Contact details, directions, and admission enquiry |
| Privacy Policy | [`privacy.html`](privacy.html) | Privacy information |
| Terms & Conditions | [`terms.html`](terms.html) | Website terms |
| Not Found | [`404.html`](404.html) | Custom not-found page |

## Features

- Responsive layouts and a mobile navigation menu
- Course and centre information across dedicated pages
- Phone, email, WhatsApp, and Google Maps links
- Client-side admission form validation
- A built-in, keyword-based Study Assistant
- Page-specific titles and descriptions

## Technology

The website uses plain HTML, CSS, and JavaScript. It has no build step or package dependencies.

## Run Locally

Open `index.html` in a browser, or serve the project directory locally. For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Project Structure

```text
.
|-- index.html          # Home page
|-- courses.html        # Course information
|-- about.html          # About the centre
|-- faculty.html        # Faculty information
|-- results.html        # Results and testimonials
|-- gallery.html        # Gallery
|-- contact.html        # Contact and enquiry form
|-- privacy.html        # Privacy policy
|-- terms.html          # Terms and conditions
|-- 404.html            # Custom not-found page
|-- styles.css          # Shared styles and responsive layouts
|-- script.js           # Navigation, form validation, and Study Assistant
|-- favicon.svg         # Site icon
`-- _redirects          # Static-host redirect configuration
```

## Deployment

Deploy the project root to a static hosting provider. The site does not require a server-side runtime. Configure the provider to use `404.html` as its custom not-found page and check that its redirect rules are compatible with the included `_redirects` file.

## Before Launch

- Verify the centre's name, address, phone number, email, courses, fees, and batch timings.
- Confirm that faculty details, results, testimonials, and gallery content are accurate and approved for publication.
- Connect the admission form to an email service, backend, or CRM. **Currently, it only validates the form and displays a confirmation in the browser; it does not transmit or save submissions.**
- Verify the Google Maps destination and all contact links.
- Review the privacy policy and terms with the centre.
