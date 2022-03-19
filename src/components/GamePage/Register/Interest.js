import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import CoverBlack from '../../../images/Cover-Black.svg';
import NextArrowWhite from '../../../images/icons/Next-Arrow-White.svg';
import AlertCustom from '../../../shared-components/AlertCustom';

import { getQuestions, postQuestions, selectQuestions } from '../../../store/app/questionSlice';
import Loading from '../../Loading';

const schema = yup.object().shape({}).required();

const defaultValues = {
  interests: [],
};

function Interest() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [quests, setQuests] = useState([]);
  const [selColor, setSelColor] = useState([
    { 0: false, 1: false, 2: false, 3: false },
    { 0: false, 1: false, 2: false, 3: false },
    { 0: false, 1: false, 2: false, 3: false },
    { 0: false, 1: false, 2: false, 3: false },
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState([]); // para revisar que no se repitan intereses
  const [userAnswers, setUserAnswers] = useState([]);

  const allQuestions = useSelector(selectQuestions);
  const { control, formState, handleSubmit, reset, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  const handleSelectAnswer = (questId, answerId, answerPos) => {
    setSelectedQuestion([...selectedQuestion, questId]);
    const ansBool = [...selColor];

    if (!selectedQuestion.includes(questId)) {
      setUserAnswers([...userAnswers, answerId]);
    } else {
      const newAnswers = [...userAnswers];
      newAnswers[questId - 1] = answerId;
      setUserAnswers([...newAnswers]);
      Object.keys(ansBool[questId]).forEach((item, i) => {
        ansBool[questId][i] = false;
      });
    }
    ansBool[questId][answerPos] = true;
    setSelColor([...ansBool]);
  };

  const onSubmit = (userId) => {
    const interests = userAnswers.map((answer, i, answers) => {
      return {
        question: i + 1,
        answer,
      };
    });
    const data = {
      user_id: 30,
      interests,
    };
    dispatch(postQuestions(data));
    history.push('/');
  };

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    setQuests(allQuestions);
  }, [allQuestions]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full  flex flex-col items-center text-white overflow-x-hidden relative"
    >
      <div
        className="w-full absolute top-0 z-10"
        style={{
          background: 'no-repeat center/cover',
          backgroundImage: `url(${CoverBlack})`,
          height: '130px',
          borderRadius: '0px 0px 30px 30px',
          marginBottom: '1.7rem',
        }}
      >
        <div className="w-full flex justify-start ml-16 mt-32">
          <Link to="/register-group" className="inline-block flex">
            <div>
              <img
                src="assets/icons/Back-Arrow.svg"
                alt="icon w-back"
                className="inline-block w-8"
              />
            </div>
            <p className="pl-4 font-500">Atras</p>
          </Link>
        </div>

        <div
          className="absolute -bottom-8 bg-white p-4 shadow-lg rounded-12 text-center"
          style={{ width: '290px', left: 'calc(50% - 145px)' }}
        >
          <span className="block text-black text-11 font-600"> Que les interesa charlar ?</span>
        </div>
      </div>
      <AlertCustom />
      <div style={{ marginTop: '10rem' }}>
        {!quests && <Loading />}
        {quests &&
          quests.length > 0 &&
          quests.map((quest) => (
            <>
              <h4 className="text-black text-12 font-bold mt-4">¿{quest.question}?</h4>
              <div
                className="grid gap-8 grid-cols-2 auto-rows-auto mx-auto my-12"
                style={{ width: '94%' }}
              >
                {quest.questionInterest.data.map((answer, pos) => (
                  <Button
                    key={answer.id}
                    className="text-10 text-center shadow-lg rounded-4 py-8 px-12"
                    onClick={() => handleSelectAnswer(quest.id, answer.interest.id, pos)}
                    sx={{ textTransform: 'none', color: '#000' }}
                    style={{
                      backgroundColor: selColor[quest.id][pos] ? '#051B34' : '#fff',
                      color: selColor[quest.id][pos] ? '#fff' : '#000',
                    }}
                  >
                    {answer.interest.name}
                  </Button>
                ))}
              </div>
            </>
          ))}
      </div>
      <div
        className="w-full flex flex-col justify-center items-center bg-white gap-4 py-8 px-16 fixed bottom-0"
        style={{
          boxShadow: '0px 1px 8px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '20px 20px 0px 0px',
        }}
      >
        <span className="block w-full text-center text-black font-600 text-10">
          Seleccione minimo 4
        </span>
        <button
          type="submit"
          // to="/chat-public"
          className="w-full py-4 border-1 border-white shadow-lg text-white text-11 font-600 rounded-8 flex items-center justify-center space-x-4"
          style={{ background: '#FF004E' }}
        >
          <p>Comenzar</p>
          <div className="flex flex-col items-center">
            <img src={NextArrowWhite} alt="icon-back" className="w-8 h-8 block" />
          </div>
        </button>
      </div>
    </form>
  );
}

export default Interest;
