import img1 from './images/m1-star-forge.jpg';
import img2 from './images/m3-star-forge.jpg';
import img3 from './images/m2-star-forge.jpg';
import img4 from './images/m4-star-forge.jpg';
import p1 from './images/p1sf.jpg';



export function GalleryPage() {
  return (
<div class="container mx-auto">
    <div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div class="w-full rounded">
            <img src={img2}
                alt="M1 Mini Stake Pool"
                description=""></img>
        </div>
        <div class="w-full col-span-2 row-span-2 rounded">
        <img src={img4}
                alt="M1 Mini Stake Pool"
                description=""></img>
        </div>
        <div class="w-full rounded">
        <img src={img3}
                alt="M1 Mini Stake Pool"
                description=""></img>
        </div>
        <div class="w-full rounded">
        <img src={p1}
                alt="M1 Mini Stake Pool"
                description=""></img>
        </div>
        <div class="w-full rounded">
        <img src={img3}
                alt="M1 Mini Stake Pool"
                description=""></img>
        </div>
        <div class="w-full rounded">
        <img src={img3}
                alt="M1 Mini Stake Pool"
                description=""></img>
        </div>
    </div>
</div>
  );
}
