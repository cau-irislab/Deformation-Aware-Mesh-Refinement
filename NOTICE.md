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
were replaced for this project; unused viewers and scripts were
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
The page includes only the main comparison and Face Removal tables, transcribed
from Tables I and IV of the author-supplied manuscript, with SO values from the supplied
revision response v0.3. Data-cell bold/underline follows these source documents;
the website does not independently rank or add emphasis to the results.
These are source results, not newly computed experiments. Other ablation,
averaging and shared-weight tables are not included.

## Fish1 comparison video and poster

Fish1 by Quaternius is CC0 1.0, distributed here through its Articulation-XL2.0
dataset derivative (CC BY 4.0), with Puppeteer skinning predictions. The saved
demo geometry, weights, motion, camera and enlarged tail view are rerendered
with two matched display modes: backface culling and visible back faces in red.
MP4 and WebM copies are included for browser compatibility. No model inference,
geometry changes or motion changes were made for this page.

- Original: https://quaternius.com/packs/animatedfish.html
- Dataset: https://huggingface.co/datasets/Seed3D/Articulation-XL2.0
- CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
- Complete demo source, modifications and license information:
  https://github.com/Budy123/Deformation-Aware-Mesh-Refinement/blob/main/examples/axl2_fish/README.md#source-and-license

The separate implementation repository retains its own license:
https://github.com/Budy123/Deformation-Aware-Mesh-Refinement

## Additional comparison animations

Five additional animations use saved Articulation-XL2.0 comparison meshes with
Puppeteer-predicted weights on the original mesh and density-fused weights on
the refined mesh. They do not rerun inference, refinement, or quantitative
evaluation. Both meshes use identical illustrative joint rotations and a fixed
camera. These are presentation motions, not the randomly sampled metric poses
or the manually posed frames in Fig. 3. Both display modes use the same
per-pixel depth renderer and light wireframes. Red denotes a visible back-facing
triangle, not a GT error classification. No gaps or offsets are added to meshes.
Each example includes a full view and an enlarged view. Zooming changes only the camera
viewport: no faces are deleted, and both meshes/modes share the same framing.
Comparison labels and enlarged-region names are displayed as fixed-size HTML
text. Space previously used for embedded text is allocated to larger full-mesh
viewports. No model geometry is removed. Vertex/face counts are omitted in all clips.

Dataset source: https://huggingface.co/datasets/Seed3D/Articulation-XL2.0
(dataset license: CC BY 4.0). Model identifiers:

- Mammoth: `27b8e1b2-27b7-52d2-96de-375a53b5f5c5`.
- Character: `195b4578-8564-526b-b01a-9c3f6fba535e`.
- Gingerbread: `8f01449b-9de6-5ce4-ac8e-6019d2572ddd`.
- Dinosaur: `02bc9195-1d80-516a-8060-f754d95e3243`.
- Badger: `388bf3c9-a748-5b88-b924-46a8d593e611`.

Only rendered comparisons are included, not source models or textures.
Depicted models retain their respective rights; the website-template license
and implementation MIT license do not relicense these assets.
