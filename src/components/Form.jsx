'useClient';

import { useForm } from 'react-hook-form';
import style from '../style/Contact.module.css';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'sonner';

const YOUR_SERVICE_ID = 'service_uyo43pq';
const YOUR_TEMPLATE_ID = 'template_4kbk2vg';
const YOUR_USER_ID = 'Mdg9nrA85n5zhBrRF';

export default function Form() {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const submit = (data) => {
    const { email, name, message } = data;
    const params = { name, email, message };
    console.log(params);
    toast.success('Email enviado con exito', {
      duration: 2500,
      classNames: {
        toast: 'h-38 text-xl',
      },
    });

    //   emailjs.init(YOUR_SERVICE_ID)

    //   emailjs.send(
    //   YOUR_SERVICE_ID, // Reemplaza con tu Service ID
    //   YOUR_TEMPLATE_ID, // Reemplaza con tu Template ID
    //   params,
    //   YOUR_USER_ID
    // ).then((response) => {
    //   console.log('SUCCESS!', response.status, response.text);
    //   toast.success('Email enviado con éxito!');
    //    // Resetea el formulario después de enviar el correo
    // }).catch((error) => {
    //   console.error('FAILED...', error);
    //   toast.error('Hubo un problema al enviar el email.');
    // });
    reset();
    let boton = document.getElementById('miBoton');
    // Desactivar el botón
    boton.disabled = true;
  };

  return (
    <section
      id="contacto"
      className={' relative flex items-center flex-col h-[1000px]'}
    >
      <Toaster theme="dark" position="bottom-center" />

      <h1 className={'text-[60px] relative text-white text-center'}>
        Contacto
      </h1>
      <form
        className={
          'flex justify-evenly items-center bg-custom-bg backdrop-custom-blur h-[400px] w-[900px]  mt-5 '
        }
        onSubmit={handleSubmit(submit, () => {})}
      >
        <div className={'w-[40%] flex flex-col items-center m-5'}>
          <div className={'w-[100%] m-4'}>
            <label className={'block text-white'} htmlFor="nombre">
              Nombre
            </label>
            <input
              className={!errors.name ? style.input : style.inputerr}
              type="text"
              id="name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
                maxLength: {
                  value: 16,
                  message: 'Ingrese como maximo 16 caracteres',
                },
              })}
            />

            <div
              className={
                'text-red-700 w-[80%]  h-8 pt-1 text-center self-center '
              }
            >
              {errors.name && (
                <p className={'text-red-600 m-0 p-0'}>{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className={'w-[100%] m-4'}>
            <label className={'block text-white'} htmlFor="email">
              Email
            </label>
            <input
              className={!errors.email ? style.input : style.inputerr}
              type="email"
              autoComplete="off"
              id="email"
              {...register('email', {
                pattern: {
                  value:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: 'El email no es valido',
                },
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
              })}
            />

            <div
              className={
                'text-red-700 w-[80%]  h-8 pt-1 text-center self-center '
              }
            >
              {errors.email && (
                <p className={'text-red-600 m-0 p-0'}>{errors.email.message}</p>
              )}
            </div>
          </div>

          {isValid && (
            <button
              id="miBoton"
              className={
                ' bg-gray-600 text-center m-3 w-[90px] self-center h-12 rounded-xl text-white cursor-pointer'
              }
              type="submit"
            >
              Enviar
            </button>
          )}
        </div>

        <div className={'w-1/2 m-5'}>
          <div className={'flex flex-col'}>
            <label className={'block text-white '} htmlFor="description">
              Mensaje
            </label>
            <textarea
              className={errors.message ? style.inputDesErr : style.inputdes}
              autoComplete="off"
              type=""
              id="description"
              {...register('message', {
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
                minLength: {
                  value: 5,
                  message: 'Ingrese minimo 5 caracteres',
                },
                maxLength: {
                  value: 550,
                  message: 'Ingrese maximo 550 caracteres',
                },
              })}
              cols={15}
              rows={5}
            ></textarea>
            <div
              className={
                'text-red-700 w-[80%]  h-8 pt-1 text-center self-center '
              }
            >
              {errors.message && (
                <p className={'text-red-600 m-0 p-0'}>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
