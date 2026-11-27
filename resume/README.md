# Resume

`maria-sales-resume.tex` is the source. CI builds it into `public/resume/maria-sales-resume.pdf`, which the
site links to; the PDF is not committed.

To build locally, install [Tectonic](https://tectonic-typesetting.github.io/) and run `npm run resume`.
Until you do, the site's Resume link has nothing to serve under `npm run dev` or `npm run preview`.
The build fails if the resume runs past one page.
Keep it to one page, and leave the phone number off: the PDF is public.
