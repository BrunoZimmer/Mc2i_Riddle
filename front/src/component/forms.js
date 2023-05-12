import { useRef } from "react";

import { Form } from '@unform/web'
import Input from '../component/input'

function Forms() {
	return (
        <Form ref={formRef} onSubmit={handleFormSubmit} id="appointment-form">
          
          <label htmlFor="Title">Title:</label>
          <Input type="text" id="Title" name="Title" placeholder="Title"/>
          <br />
          <label htmlFor="URL">Nom du chirurgien:</label>
          <Input type="text" id="URL" name="URL" placeholder="URL"/>
          <br />
          <label htmlFor="Tech">Tech principal:</label>
          <Input type="text" id="Tech" name="Tech" placeholder="Tech"/>
          <br />
          <button > 
            Soumettre
          </button>
        </Form>
        
	);
}

export default Forms;