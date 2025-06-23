import { useForm } from 'react-hook-form';//react hook form library
import { useContext }from "react";
import { ThemeContext } from './Context/ThemeContext';

function Home() {

  const context = useContext(ThemeContext);
  console.log(context);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    default: {
      name: '',
      email: '',
      password: ''
    }
  });

  const handleSubmit1 = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit(handleSubmit1)}>
        <input
          type="text"
          {...register('name', {
            required: 'name is required !!!',
            maxLength: { value: 7, message: 'Max length is 7 characters' },
            minLength: {value: 3,message: 'size should be min 3'}
          })}
        /><span style={{color:'black'}}>
        {errors.name?.message}</span>
        <br /><br />

        <input
          type="email"
          {...register('email')}
        />
        <br /><br />

        <input
          type="password"
          {...register('password')}
        />
        <br /><br />


        <input type="text"
          {...register('age',{min:{
            value:18,
            message:"min age should be 18"
          },
        max:{
            value:65,
            message:"max age shold be 65"
        }
        })}
        />
        <span style={{color:'black'}}>
        {errors.age?.message}</span>
        <br></br>

        <input type="checkbox"
        {...register('subscribe')}
        /><br></br>

        <button type="submit" style={{ backgroundColor: 'lime'}}>Submit</button>

        
      </form>

      <p>This is home page</p>
    </>
  );
}

export default Home;