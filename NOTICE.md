# Attribution and media notices

## Page template

The page structure and visual style follow the IRIS Lab SeeingSpeech page:
https://github.com/cau-irislab/NeurIPS2026-SeeingSpeech

Reference index.html blob: ea322b17c0d42d220e203281e230891f8c274193.
Reference assets/css/index.css blob: c75535c79cf69a96ea21d4e34ff6bd55c3b0c7bd.
The earlier draft also referenced Deformable-3D-ADV at revision
6b2ecdc65178b19bdd18306a2036789d6b6a8368.

That page credits the Academic Project Page Template, adopted from Nerfies:

- https://github.com/eliahuhorwitz/Academic-project-page-template
- https://nerfies.github.io/

The adapted page template retains the Creative Commons Attribution-ShareAlike
4.0 International notice. The project title, authors, text, media and links
were replaced for this project; unused viewers, carousels and scripts were
not included. Attribution is retained in the visible page footer.

License: https://creativecommons.org/licenses/by-sa/4.0/

## Third-party components

- Bulma 0.9.1: MIT, Copyright (c) 2020 Jeremy Thomas.
  The existing stylesheet and its header are retained; full license:
  `static/licenses/Bulma-MIT.txt`.
- Google Sans and Noto Sans are requested through the same Google Fonts
  stylesheet as the reference page; they are served by Google, not redistributed
  in this repository. The bundled Noto Sans variable font is an offline fallback:
  SIL Open Font License 1.1, Copyright 2022 The Noto Project Authors.
  Full license: `static/fonts/OFL.txt`.
- Font Awesome Free 6.7.2 GitHub and PDF SVG icons: CC BY 4.0, Copyright 2024
  Fonticons, Inc. Attribution comments are retained in the SVGs; complete
  third-party license: `static/licenses/Font-Awesome-Free.txt`.
  The GitHub logo is used only to identify the linked GitHub code repository.

## Paper figures

Figures are from the manuscript **Deformation-Aware Mesh Refinement for Robust
Automatic Rigging**, by Hyun Wook Kim, Sanglim Han and Hak Gu Kim, Chung-Ang
University. The author supplied them for use in project materials. The figures
and third-party assets depicted retain their respective rights; the template
license and software MIT license do not grant blanket rights to them.

The page includes all three author-supplied figures: observations (Fig. 1),
pipeline (Fig. 2), and qualitative comparisons (Fig. 3). Fig. 3 uses the updated
`Fig3_qualitativeResults-aligned.pdf` supplied by the author. It is rendered
from the complete PDF on a white background, without cropping or
altering its contents. Its method-row labels are explained in the page caption.
Numerical comparison and ablation tables are transcribed from Tables I–IV of
the author-supplied manuscript; they are not newly computed experiments.
SO values and the additional averaging/shared-weight comparisons are from the
author-supplied revision response v0.3. The original manuscript values and
additional comparisons are kept in their respective tables, not silently
combined as a new experimental run.

## Fish1 comparison video and poster

Fish1 by Quaternius is CC0 1.0, distributed here through its Articulation-XL2.0
dataset derivative (CC BY 4.0), with Puppeteer skinning predictions. The video
in MP4 format and its first-frame poster are copied unchanged from the existing
demo. A lossless VP9 WebM copy is included for browser compatibility; all 80
decoded YUV420 video frames match the MP4. No model inference, geometry changes
or motion changes were made for this page.

- Original: https://quaternius.com/packs/animatedfish.html
- Dataset: https://huggingface.co/datasets/Seed3D/Articulation-XL2.0
- CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
- Complete demo source, modifications and license information:
  https://github.com/Budy123/Deformation-Aware-Mesh-Refinement/blob/main/examples/axl2_fish/README.md#source-and-license

The separate implementation repository retains its own license:
https://github.com/Budy123/Deformation-Aware-Mesh-Refinement
