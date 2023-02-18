import './App.css';

function App() {

  const imgUrl = [
    {
      "sec_id": '01',
      "sec": [
        {
          "id": '01',
          "url": 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          "id": '02',
          "url": 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1852&q=80'
        },
        {
          "id": '03',
          "url": 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        }
      ]
    },
    {
      "sec_id": '02',
      "sec": [
        {
          "id": '01',
          "url": 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
          "id": '02',
          "url": 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          "id": '03',
          "url": 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        }
      ]
    },
    {
      "sec_id": '03',
      "sec": [
        {
          "id": '01',
          "url": 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          "id": '02',
          "url": 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
        },
        {
          "id": '03',
          "url": 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q'
        }
      ]
    },
    {
      "sec_id": '04',
      "sec": [
        {
          "id": '01',
          "url": 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
        },
        {
          "id": '02',
          "url": 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
        },
        {
          "id": '03',
          "url": 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q'
        }
      ]
    },
    {
      "sec_id": '05',
      "sec": [
        {
          "id": '01',
          "url": 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
          "id": '02',
          "url": 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          "id": '03',
          "url": 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        }
      ]
    },
    {
      "sec_id": '06',
      "sec": [
        {
          "id": '01',
          "url": 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
        },
        {
          "id": '02',
          "url": 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
        },
        {
          "id": '03',
          "url": 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q'
        }
      ]
    }

  ];





  return (
    <div className="image-container">

      {
        imgUrl.map(imgSection =>
          
          
          <div className='img-column' key={imgSection.sec_id}>

            {
              imgSection.sec.map(galleryImg =>

                <img src={galleryImg.url} alt="" key={galleryImg.id} className='gallery-photo' />

              )
            }

          </div>

          
        )
      }

    </div>
  );
}

export default App;
