import Hinh from './assets/react.svg'
function Card(){
  return(
    <div className="card">
      <img src={Hinh} alt="Khang" className='card-image'/>
      <h2 className='card-title'>Khang</h2>
      <p className='card-text'>JAVAAAAAAAAAAAAAAAAAAA</p>
    </div>

  );
}
export default Card