import preloader from '../../../assets/img/loading.svg'

let Preloader = (props) => {
  return <div style={{
    backgroundColor: 'white'
  }}><img src={preloader} alt='' /></div>
}

export default Preloader