import { SVG, Path, Circle, Polygon } from '@wordpress/primitives';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const myElement = (
  <SVG class="peak-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102">
    <Circle class="peak-logo-svg-circle" cx="50" cy="50" r="50"></Circle>
    <Polygon class="peak-logo-svg-letters" points="70.45 39.19 70.45 61.48 75.19 61.48 75.19 53.82 78.47 50.48 84.61 61.48 90.66 61.48 82.14 46.79 89.65 39.19 83.69 39.19 75.19 47.68 75.19 39.19 70.45 39.19"></Polygon>
    <Polygon class="peak-logo-svg-letters" points="43.83 43.41 43.83 39.22 28.98 39.22 28.98 61.48 43.83 61.48 43.83 57.29 33.71 57.29 33.71 52.23 43.2 52.23 43.2 48.03 33.71 48.03 33.71 43.41 43.83 43.41"></Polygon>
    <Path class="peak-logo-svg-letters" d="M45.77,61.48h5.12L51.48,60a3,3,0,0,1,.16-.36,6,6,0,0,1,11-.21,2.92,2.92,0,0,1,.14.31l.7,1.78h5.15l-8.9-22.26h-5Zm13.95-9.63a10.56,10.56,0,0,0-2.53-.31,9.85,9.85,0,0,0-2.55.33l2.56-6.52Z"></Path>
    <Path class="peak-logo-svg-letters" d="M9.34,39.22V61.48h4.73V53.57h3.4c5.56,0,9-2.71,9-7.18s-3.46-7.17-9-7.17Zm12.29,7.17c0,1.91-1.48,3-4.16,3h-3.4v-6h3.4C20.15,43.41,21.63,44.49,21.63,46.39Z"></Path>
  </SVG>
);

registerBlockType( metadata.name, {
	edit: Edit,
	save,
  icon: myElement
} );
