import Card from "./shared/Card"
import { useState ,useContext,useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from "../context/FeedbackContext"



function FeedbackForm( ) {


    const [text , setText] = useState('')
    const [isDisabled , setisDisabled] = useState(true)
    const [message , setMessage] = useState('')
    const [rating , setRating] = useState('10')

    const { addFeedback ,feedbackEdit , updateFeedback } = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        //console.log( e.target.value )
        setText(e.target.value)

        if( text === "" ){
            setisDisabled(true)
            setMessage("")
        }else if ( text !== "" && text.trim().length <= 10 ){
            setisDisabled(true)
            setMessage("Message must be atleast 10 characters long");
        }else {
            setisDisabled(false)
            setMessage("")
        }
    }

   const handlSubmit =(e) => {
       e.preventDefault();
       if ( text.trim().length >= 10 ){
           const newfeedback = {
               text,
               rating
           }

           if( feedbackEdit.edit === true ) {
            updateFeedback( feedbackEdit.item.id , newfeedback );
           }else {
            addFeedback(newfeedback)
           }
           
           
           //resetting the text
           setText('')
       }
   }
   
   useEffect( () => {

        if (  feedbackEdit.edit === true ){
            setText(feedbackEdit.item.text)
            setisDisabled(false)
        }
   }, [feedbackEdit] )
   

  return (
    <Card>
        <form onSubmit={ handlSubmit }>
            <h2>How would you like to review our services ?</h2>
            < RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} value={text} placeholder="Input your comment" />
                <Button type="submit" isDisabled={ isDisabled }>send</Button>
            </div>
            
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
