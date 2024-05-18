"useClient" 

import { useForm } from 'react-hook-form';
import style from '../style/Contact.module.css';


export default function Form() {
  const { register, formState: { errors}, handleSubmit } = useForm();

  const submit = (data) => {
   
    console.log(data);
  };

  return (
    <section className={style.section}>
      <form onSubmit={handleSubmit(submit, ()=>{})}>

      
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" {...register('nombre',{
            required: true ,

        })} />
        {errors.nombre?.type === "required" && <p>Este campo es requerido</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email', {
            pattern : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i 
        })} />

        {errors.email?.type === "pattern" && <p>el email no es valido</p>}

        <label htmlFor="description">Asunto</label>
        <input  autoComplete="off" type="" id="description" {...register('description')} className={style.input} />
        <div>
        <button type="submit">enviar</button>

        </div>
      </form>
    </section>
  );
}