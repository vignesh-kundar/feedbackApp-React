import { v4 as uuidv4 } from "uuid"
import { createContext ,useState } from 'react'

const FeedbackContext = createContext();

//main Function !!
export const FeedbackProvider= ({children}) => {

  const [feedback , setFeedback] = useState( [
    {
      id: 1 ,
      rating : 10,
      text : "This is the context 1"
    },
    {
      id: 2 ,
      rating : 9,
      text : "This is the context 2"
    },
    {
      id: 3 ,
      rating : 8,
      text : "This is the context 3"
    },
  ])

  const [feedbackEdit ,setFeedbackEdit ] = useState({
    item : { } ,
    edit : false
  } )

  //Edit feedback
  const editFeedback = (item) =>  {

    setFeedbackEdit({
      item,
      edit : true
    })
  }

  //update Feedback 
  const updateFeedback = (id , updItem) => {

    setFeedback(
      feedback.map( (item) => (
        (item.id === id)? { ...item , ...updItem }: item
      ))
    )
    
  }

  // Delete feedback :)
  const deleteFeedback = (id) => {
    if( window.confirm( 'Are you sure you want to delete?')) {
       setFeedback( feedback.filter( (item) => item.id !== id ) )
    }
  }

  // Add feedback :)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  //return
  return (
    <FeedbackContext.Provider value={ 
      {
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
      } }>

        {children}
    </FeedbackContext.Provider>
  )

}

export default FeedbackContext;
