import FeedbackItem from "./Feedbackitem"

import { motion ,AnimatePresence } from 'framer-motion'

import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList( ) {

    const {feedback} = useContext(FeedbackContext)
    const {deleteFeedback} = useContext(FeedbackContext)
    
    if ( !feedback || feedback.length === 0 ) {
        return <p>No Feedback yet!!</p>
    }


    return (
  
        <div className="feedback-list">
            
            <AnimatePresence>

            {feedback.map( (item) => (
               
               <motion.div
               key = {item.id} 
               initial= {{ opacity:0 }}
               animate ={{ opacity:1 }}
               exit = {{ opacity:0 }} >

                    < FeedbackItem 
                      key={item.id} item={item} 
                      handleDelete = { deleteFeedback } />

                </motion.div>
    
           ))}

            </AnimatePresence>
         
        </div>
    
    )


    // Backup : )
    // return (
  
    // <div className="feedback-list">
    //    {feedback.map( (item) => (
    //        < FeedbackItem key={item.id} item={item} handleDelete = {handleDelete} />
    //    ))}
    // </div>

    // )

 }  



export default FeedbackList;
