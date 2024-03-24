import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Radio, DatePicker, Button, Modal } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .matches(/^\S*$/, 'В имени не должно быть пробелов')
        .required('Поле обязательно для заполнения'),

    email: yup
        .string()
        .email('Введите корректный email')
        .required('Поле обязательно для заполнения'),

    password: yup
        .string()
        .matches(
            /^(?=.*[A-Z])[^\s]{6,}$/,
            'Минимальная длина пароля 6 символов, минимум одна заглавная буква обязательна, пробелов быть не должно',
        )
        .required('Поле обязательно для заполнения'),

    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('Поле обязательно для заполнения'),

    date: yup
        .date()
        .max(new Date(Date.now() - 567993600000), 'You must be at least 18 years old')
        .required('Выберите дату'),

    gender: yup.string().required('Выберите пол'),

    number: yup
        .string()
        .test(
            'correctNumber',
            'Введите корректный номер телефона',
            (val) =>
                val?.trim().length &&
                /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
        )
        .required('Поле обязательно для заполнения'),
});

const RegistrationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');

    const {
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        setModalData(JSON.stringify(data));
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setModalData('');
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            alert('Пользователь успешно зарегистрирован!');
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Имя*:</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="Имя" />}
                    />
                    <p>{errors.name?.message}</p>
                </div>

                <div>
                    <label>Email*:</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="Email" />}
                    />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <label>Пароль*:</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="Пароль" />}
                    />
                    <p>{errors.password?.message}</p>
                </div>

                <div>
                    <label>Подтвердите пароль*:</label>
                    <Controller
                        name="passwordConfirmation"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} placeholder="Введите пароль ещё раз" />
                        )}
                    />
                    <p>{errors.passwordConfirmation?.message}</p>
                </div>

                <div>
                    <label>Дата*:</label>
                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                style={{ display: 'block' }}
                                {...field}
                                placeholder="Выберите свою дату рождения"
                            />
                        )}
                    />
                    <p>{errors.date?.message}</p>
                </div>

                <div>
                    <label>Пол*:</label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Radio.Group {...field} style={{ display: 'block' }}>
                                <Radio value="male">Мужской</Radio>
                                <Radio value="female">Женский</Radio>
                            </Radio.Group>
                        )}
                    />
                    <p>{errors.gender?.message}</p>
                </div>

                <div>
                    <label>Номер телефона*:</label>
                    <Controller
                        name="number"
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="+375291234567" />}
                    />
                    <p>{errors.number?.message}</p>
                </div>

                <Button type="primary" htmlType="submit" block>
                    Зарегистрироваться
                </Button>
            </form>

            <Modal
                open={isModalOpen}
                title="Окно подтверждения"
                footer={[
                    <Button key="ok" type="primary" onClick={handleOk}>
                        Got it!
                    </Button>,
                ]}>
                <p>{modalData}</p>
            </Modal>
        </>
    );
};

export default RegistrationForm;
