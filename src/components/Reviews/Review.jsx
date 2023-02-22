import comma from '../../assets/review/comma.png'

const Review = (props) => {
  return (
    <div style={{boxShadow:"1px 20px 50px 1px rgba(0, 0, 0, 0.1)",padding:'1rem',fontSize:".7rem",fontWeight:"600",width:'90%'}}>
        <img src={comma} alt="" style={{width:"calc(.8rem + .2vw)",marginBottom:".5rem"}}/>
        <p style={{marginLeft:".5rem",fontFamily:'Mulish',lineHeight:"1rem"}}>{props.data.review}</p>
        <p style={{margin:"0 0 0 .5rem",fontFamily:'Roboto',color:"rgba(2, 91, 93, 1)"}}>{props.data.user}</p>
    </div>
  )
}

export default Review
