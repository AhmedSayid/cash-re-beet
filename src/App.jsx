import './assest/css/bootstrap.min.css'
import Comp from './components/nav/Nav';
import Search from './components/search/search'
import img from './assest/img/img-1.jpg'
import './components/banner/banner.css';
import liver from './assest/img/liverpool.png'
import bvb from './assest/img/bvb.png'


function App() {
  return (
    <>
      <Comp />
      <Search />
      <div className='main d-flex justify-content-center  align-center mt-4'>
        <div  >
          <center><img src={img} alt="" /></center>

        </div>

      </div>
      <div className='p-3'>
        <center>
          
          <div className='direct p-3 mt-4'>
            
            <div className='right'>
          <div className='dirc '>
            <div>مباشر</div>
          </div>
        </div>
            
            <div className='row d-flex justify-content-center'>
      <div className='card col-md-6 col-sm-4 col-12  p-3 mb-2'>
        <div className='right'>
          <div className='dirc '>
            <div>مباشر</div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3 '>
          {/* ====================================================== */}
          <div className='imgInRow'>
            {/* img-1 */}
            <img style={{ width: '50px', }} src={liver} alt="" />
          </div>
          {/* vs text */}
          <div className='text-light fw-bold fs-4 text-center mx-3 mt-4 vs'>Vs</div>
          {/* img-2 */}
          <div className='imgInRow'>
            <img style={{ width: '50px' }} src={bvb} alt="" />
          </div>
          {/* ====================================================== */}


        </div>
        {/* ====================================================== */}
        <div className='mt-2'>
          <div style={{ float: 'right' }} className="text">
            63°الشوط الاول
          </div>
        </div>
        {/* ====================================================== */}
        <div dir='rtl'>
          <div class="progress mt-2">
            <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        {/* ====================================================== */}
            <div> 

            <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
              <div>ليفربول</div>
              <div>4</div>
            </div>
            <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
              <div>ليفربول</div>
              <div>4</div>
            </div>
            </div>
        {/* ====================================================== */}
            <div className='d-flex mt-2 mb-2'>
              <div className='btn'>1,75</div>
              <div className='btn mx-3'>1,75</div>
              <div className='btn'>1,75</div>
</div>
      </div>
{/* ==================================================================== */}
    <div className='card col-md-6 col-sm-4 col-12  p-3 mx-3 mb-2'>
        <div className='right'>
          <div className='dirc '>
            <div>مباشر</div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3 '>
          {/* ====================================================== */}
          <div className='imgInRow'>
            {/* img-1 */}
            <img style={{ width: '50px', }} src={liver} alt="" />
          </div>
          {/* vs text */}
          <div className='text-light fw-bold fs-4 text-center mx-3 mt-4 vs'>Vs</div>
          {/* img-2 */}
          <div className='imgInRow'>
            <img style={{ width: '50px' }} src={bvb} alt="" />
          </div>
          {/* ====================================================== */}


        </div>
        {/* ====================================================== */}
        <div className='mt-2'>
          <div style={{ float: 'right' }} className="text">
            63°الشوط الاول
          </div>
        </div>
        {/* ====================================================== */}
        <div dir='rtl'>
          <div class="progress mt-2">
            <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        {/* ====================================================== */}
            <div> 

            <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
              <div>ليفربول</div>
              <div>4</div>
            </div>
            <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
              <div>ليفربول</div>
              <div>4</div>
            </div>
            </div>
        {/* ====================================================== */}
            <div className='d-flex mt-2 mb-2'>
              <div className='btn'>1,75</div>
              <div className='btn mx-3'>1,75</div>
              <div className='btn'>1,75</div>
</div>
      </div>
        {/* ====================================================== */}
          <div className='card col-md-6 col-sm-4 col-12  p-3 mb-2 '>
        <div className='right'>
          <div className='dirc '>
            <div>مباشر</div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3 '>
          {/* ====================================================== */}
          <div className='imgInRow'>
            {/* img-1 */}
            <img style={{ width: '50px', }} src={liver} alt="" />
          </div>
          {/* vs text */}
          <div className='text-light fw-bold fs-4 text-center mx-3 mt-4 vs'>Vs</div>
          {/* img-2 */}
          <div className='imgInRow'>
            <img style={{ width: '50px' }} src={bvb} alt="" />
          </div>
          {/* ====================================================== */}


        </div>
        {/* ====================================================== */}
        <div className='mt-2'>
          <div style={{ float: 'right' }} className="text">
            63°الشوط الاول
          </div>
        </div>
        {/* ====================================================== */}
        <div dir='rtl'>
          <div class="progress mt-2">
            <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        {/* ====================================================== */}
            <div> 

            <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
              <div>ليفربول</div>
              <div>4</div>
            </div>
            <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
              <div>ليفربول</div>
              <div>4</div>
            </div>
            </div>
        {/* ====================================================== */}
            <div className='d-flex mt-2 mb-2'>
              <div className='btn'>1,75</div>
              <div className='btn mx-3'>1,75</div>
              <div className='btn'>1,75</div>
</div>
      </div>
            </div>
          </div>

        </center>
      </div>

    </>
  );
}

export default App;
