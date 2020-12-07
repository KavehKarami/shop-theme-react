import React from 'react';
import Input from '../shared/inputs/Input';

const WriteComment = (props) => {
  return (
    <div className="write-comment w-100">
      <h4 className="my-4 title text-center">{props.title}</h4>
      <form className="mx-auto">

        <Input id="name" isRequired={true} label="نام * " />
        <Input id="family" isRequired={true} label="نام خانوادگی * " />
        <Input className="text-left direction-ltr" id="email" isRequired={true} label="ایمیل * " />

        <div className="form-group">
          <textarea type="text" name="textArea" id="textArea" rows="6" required></textarea>
          <label htmlFor="textArea">نظر خود را وارد کنید * </label>
        </div>

        <button type="submit">
          ارسال
        </button>
      </form>
    </div>
  );
}

export default WriteComment;