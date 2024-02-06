const Header = () => {
  return (
    <header>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL'
        crossOrigin='anonymous'
      ></script>
      <nav
        className='navbar d-flex justify-content-start align-items-center'
        style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <div className='container justify-content-start'>
          <a href='/'>
            <svg
              className='logo'
              width='97'
              height='29'
              viewBox='0 0 97 29'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='97' height='29' rx='6' fill='black' />
              <path
                d='M8.52 20C8.40267 20 8.30667 19.9627 8.232 19.888C8.15733 19.8133 8.12 19.7173 8.12 19.6V9.2C8.12 9.08267 8.15733 8.98667 8.232 8.912C8.30667 8.83733 8.40267 8.8 8.52 8.8H13.4C14.3173 8.8 15.0693 8.928 15.656 9.184C16.2427 9.44 16.6747 9.808 16.952 10.288C17.24 10.7573 17.384 11.3173 17.384 11.968C17.384 12.352 17.3093 12.6933 17.16 12.992C17.0213 13.28 16.8453 13.52 16.632 13.712C16.4293 13.904 16.2373 14.0427 16.056 14.128C16.4613 14.32 16.8187 14.6347 17.128 15.072C17.448 15.5093 17.608 16.0213 17.608 16.608C17.608 17.312 17.448 17.92 17.128 18.432C16.8187 18.9333 16.36 19.3227 15.752 19.6C15.1547 19.8667 14.4187 20 13.544 20H8.52ZM10.984 17.92H13.224C13.6827 17.92 14.0293 17.7867 14.264 17.52C14.4987 17.2533 14.616 16.9493 14.616 16.608C14.616 16.2347 14.4933 15.92 14.248 15.664C14.0133 15.408 13.672 15.28 13.224 15.28H10.984V17.92ZM10.984 13.248H13.08C13.5173 13.248 13.8427 13.136 14.056 12.912C14.28 12.688 14.392 12.4 14.392 12.048C14.392 11.7067 14.28 11.4293 14.056 11.216C13.8427 10.992 13.5173 10.88 13.08 10.88H10.984V13.248ZM19.6096 20C19.4923 20 19.3963 19.9627 19.3216 19.888C19.247 19.8133 19.2096 19.7173 19.2096 19.6V9.04C19.2096 8.92267 19.247 8.82667 19.3216 8.752C19.3963 8.67733 19.4923 8.64 19.6096 8.64H21.4976C21.615 8.64 21.711 8.67733 21.7856 8.752C21.8603 8.82667 21.8976 8.92267 21.8976 9.04V19.6C21.8976 19.7173 21.8603 19.8133 21.7856 19.888C21.711 19.9627 21.615 20 21.4976 20H19.6096ZM27.7238 20.16C26.8278 20.16 26.0704 20.016 25.4518 19.728C24.8438 19.44 24.3744 19.0293 24.0438 18.496C23.7238 17.952 23.5424 17.3067 23.4998 16.56C23.4891 16.3467 23.4838 16.1067 23.4838 15.84C23.4838 15.5627 23.4891 15.3227 23.4998 15.12C23.5424 14.3627 23.7344 13.7173 24.0758 13.184C24.4171 12.6507 24.8918 12.24 25.4998 11.952C26.1184 11.664 26.8598 11.52 27.7238 11.52C28.5984 11.52 29.3398 11.664 29.9478 11.952C30.5664 12.24 31.0464 12.6507 31.3878 13.184C31.7291 13.7173 31.9211 14.3627 31.9638 15.12C31.9744 15.3227 31.9798 15.5627 31.9798 15.84C31.9798 16.1067 31.9744 16.3467 31.9638 16.56C31.9211 17.3067 31.7344 17.952 31.4038 18.496C31.0838 19.0293 30.6144 19.44 29.9958 19.728C29.3878 20.016 28.6304 20.16 27.7238 20.16ZM27.7238 18.208C28.2038 18.208 28.5504 18.064 28.7638 17.776C28.9878 17.488 29.1158 17.056 29.1478 16.48C29.1584 16.32 29.1638 16.1067 29.1638 15.84C29.1638 15.5733 29.1584 15.36 29.1478 15.2C29.1158 14.6347 28.9878 14.208 28.7638 13.92C28.5504 13.6213 28.2038 13.472 27.7238 13.472C27.2544 13.472 26.9078 13.6213 26.6838 13.92C26.4598 14.208 26.3371 14.6347 26.3158 15.2C26.3051 15.36 26.2998 15.5733 26.2998 15.84C26.2998 16.1067 26.3051 16.32 26.3158 16.48C26.3371 17.056 26.4598 17.488 26.6838 17.776C26.9078 18.064 27.2544 18.208 27.7238 18.208ZM37.6334 23.52C36.812 23.52 36.1294 23.4133 35.5854 23.2C35.052 22.9867 34.6254 22.7307 34.3054 22.432C33.996 22.1333 33.772 21.8347 33.6334 21.536C33.4947 21.248 33.42 21.0187 33.4094 20.848C33.3987 20.7307 33.436 20.6347 33.5214 20.56C33.6067 20.4853 33.708 20.448 33.8254 20.448H35.8574C35.9534 20.448 36.0334 20.4693 36.0974 20.512C36.172 20.5653 36.2307 20.6507 36.2734 20.768C36.3267 20.8853 36.396 21.008 36.4814 21.136C36.5774 21.264 36.7054 21.3653 36.8654 21.44C37.036 21.5253 37.2654 21.568 37.5534 21.568C37.8734 21.568 38.14 21.5147 38.3534 21.408C38.5667 21.312 38.7267 21.1467 38.8334 20.912C38.94 20.688 38.9934 20.384 38.9934 20V18.928C38.748 19.1947 38.4334 19.4133 38.0494 19.584C37.6654 19.744 37.2014 19.824 36.6574 19.824C36.1134 19.824 35.6334 19.744 35.2174 19.584C34.8014 19.424 34.4547 19.184 34.1774 18.864C33.9 18.544 33.6814 18.1547 33.5214 17.696C33.372 17.2373 33.2814 16.7093 33.2494 16.112C33.2387 15.8347 33.2387 15.5573 33.2494 15.28C33.2814 14.704 33.372 14.1867 33.5214 13.728C33.6707 13.2693 33.884 12.8747 34.1614 12.544C34.4494 12.2133 34.8014 11.9627 35.2174 11.792C35.6334 11.6107 36.1134 11.52 36.6574 11.52C37.2334 11.52 37.724 11.632 38.1294 11.856C38.5454 12.0693 38.8867 12.3413 39.1534 12.672V12.08C39.1534 11.9733 39.1907 11.8827 39.2654 11.808C39.34 11.7227 39.436 11.68 39.5534 11.68H41.3934C41.5107 11.68 41.6067 11.7227 41.6814 11.808C41.7667 11.8827 41.8094 11.9733 41.8094 12.08V19.776C41.8094 20.5867 41.644 21.2693 41.3134 21.824C40.9827 22.3787 40.508 22.8 39.8894 23.088C39.2707 23.376 38.5187 23.52 37.6334 23.52ZM37.5214 17.744C37.8627 17.744 38.14 17.6693 38.3534 17.52C38.5667 17.3707 38.7214 17.1787 38.8174 16.944C38.924 16.7093 38.9827 16.4587 38.9934 16.192C39.004 16.0747 39.0094 15.9093 39.0094 15.696C39.0094 15.4827 39.004 15.3227 38.9934 15.216C38.9827 14.9387 38.924 14.6827 38.8174 14.448C38.7214 14.2133 38.5667 14.0267 38.3534 13.888C38.14 13.7387 37.8627 13.664 37.5214 13.664C37.1694 13.664 36.8867 13.7387 36.6734 13.888C36.4707 14.0373 36.3214 14.24 36.2254 14.496C36.14 14.752 36.0867 15.0347 36.0654 15.344C36.0547 15.5787 36.0547 15.8187 36.0654 16.064C36.0867 16.3733 36.14 16.656 36.2254 16.912C36.3214 17.168 36.4707 17.3707 36.6734 17.52C36.8867 17.6693 37.1694 17.744 37.5214 17.744ZM44.27 20C44.1527 20 44.0567 19.9627 43.982 19.888C43.9073 19.8133 43.87 19.7173 43.87 19.6V9.2C43.87 9.08267 43.9073 8.98667 43.982 8.912C44.0567 8.83733 44.1527 8.8 44.27 8.8H49.15C50.0673 8.8 50.8193 8.928 51.406 9.184C51.9927 9.44 52.4247 9.808 52.702 10.288C52.99 10.7573 53.134 11.3173 53.134 11.968C53.134 12.352 53.0593 12.6933 52.91 12.992C52.7713 13.28 52.5953 13.52 52.382 13.712C52.1793 13.904 51.9873 14.0427 51.806 14.128C52.2113 14.32 52.5687 14.6347 52.878 15.072C53.198 15.5093 53.358 16.0213 53.358 16.608C53.358 17.312 53.198 17.92 52.878 18.432C52.5687 18.9333 52.11 19.3227 51.502 19.6C50.9047 19.8667 50.1687 20 49.294 20H44.27ZM46.734 17.92H48.974C49.4327 17.92 49.7793 17.7867 50.014 17.52C50.2487 17.2533 50.366 16.9493 50.366 16.608C50.366 16.2347 50.2433 15.92 49.998 15.664C49.7633 15.408 49.422 15.28 48.974 15.28H46.734V17.92ZM46.734 13.248H48.83C49.2673 13.248 49.5927 13.136 49.806 12.912C50.03 12.688 50.142 12.4 50.142 12.048C50.142 11.7067 50.03 11.4293 49.806 11.216C49.5927 10.992 49.2673 10.88 48.83 10.88H46.734V13.248ZM56.5116 23.04C56.4156 23.04 56.3356 23.008 56.2716 22.944C56.2076 22.88 56.1756 22.8 56.1756 22.704C56.1756 22.6827 56.1756 22.6507 56.1756 22.608C56.1863 22.576 56.2023 22.5387 56.2236 22.496L57.4716 19.488L54.3996 12.224C54.3676 12.1493 54.3516 12.0853 54.3516 12.032C54.373 11.936 54.4156 11.856 54.4796 11.792C54.5436 11.7173 54.6236 11.68 54.7196 11.68H56.5436C56.6823 11.68 56.7836 11.7173 56.8476 11.792C56.9223 11.856 56.9703 11.9307 56.9916 12.016L58.8316 16.672L60.7036 12.016C60.7463 11.9307 60.7996 11.856 60.8636 11.792C60.9383 11.7173 61.045 11.68 61.1836 11.68H62.9756C63.0716 11.68 63.1516 11.7173 63.2156 11.792C63.2903 11.856 63.3276 11.9307 63.3276 12.016C63.3276 12.0693 63.3116 12.1387 63.2796 12.224L58.7516 22.704C58.7196 22.7893 58.6663 22.864 58.5916 22.928C58.517 23.0027 58.4103 23.04 58.2716 23.04H56.5116ZM68.7625 20C68.0798 20 67.4878 19.8933 66.9865 19.68C66.4958 19.456 66.1172 19.1147 65.8505 18.656C65.5838 18.1867 65.4505 17.584 65.4505 16.848V13.776H64.2025C64.0852 13.776 63.9838 13.7387 63.8985 13.664C63.8238 13.5893 63.7865 13.4933 63.7865 13.376V12.08C63.7865 11.9627 63.8238 11.8667 63.8985 11.792C63.9838 11.7173 64.0852 11.68 64.2025 11.68H65.4505V9.04C65.4505 8.92267 65.4878 8.82667 65.5625 8.752C65.6478 8.67733 65.7438 8.64 65.8505 8.64H67.7065C67.8238 8.64 67.9198 8.67733 67.9945 8.752C68.0692 8.82667 68.1065 8.92267 68.1065 9.04V11.68H70.1065C70.2238 11.68 70.3198 11.7173 70.3945 11.792C70.4692 11.8667 70.5065 11.9627 70.5065 12.08V13.376C70.5065 13.4933 70.4692 13.5893 70.3945 13.664C70.3198 13.7387 70.2238 13.776 70.1065 13.776H68.1065V16.624C68.1065 16.9867 68.1758 17.2747 68.3145 17.488C68.4532 17.7013 68.6878 17.808 69.0185 17.808H70.2505C70.3678 17.808 70.4638 17.8453 70.5385 17.92C70.6132 17.9947 70.6505 18.0907 70.6505 18.208V19.6C70.6505 19.7173 70.6132 19.8133 70.5385 19.888C70.4638 19.9627 70.3678 20 70.2505 20H68.7625ZM75.8153 20.16C74.5566 20.16 73.5539 19.8187 72.8073 19.136C72.0606 18.4533 71.6713 17.44 71.6393 16.096C71.6393 16.0213 71.6393 15.9253 71.6393 15.808C71.6393 15.6907 71.6393 15.6 71.6393 15.536C71.6713 14.6933 71.8579 13.9733 72.1993 13.376C72.5513 12.768 73.0313 12.3093 73.6393 12C74.2579 11.68 74.9779 11.52 75.7993 11.52C76.7379 11.52 77.5113 11.7067 78.1193 12.08C78.7379 12.4533 79.2019 12.96 79.5113 13.6C79.8206 14.24 79.9753 14.9707 79.9753 15.792V16.176C79.9753 16.2933 79.9326 16.3893 79.8472 16.464C79.7726 16.5387 79.6819 16.576 79.5753 16.576H74.4553C74.4553 16.5867 74.4553 16.6027 74.4553 16.624C74.4553 16.6453 74.4553 16.6667 74.4553 16.688C74.4659 16.9973 74.5193 17.28 74.6153 17.536C74.7113 17.792 74.8606 17.9947 75.0633 18.144C75.2659 18.2933 75.5113 18.368 75.7993 18.368C76.0126 18.368 76.1886 18.336 76.3273 18.272C76.4766 18.1973 76.5993 18.1173 76.6953 18.032C76.7913 17.936 76.8659 17.856 76.9193 17.792C77.0153 17.6853 77.0899 17.6213 77.1433 17.6C77.2073 17.568 77.3033 17.552 77.4313 17.552H79.4153C79.5219 17.552 79.6073 17.584 79.6713 17.648C79.7459 17.7013 79.7779 17.7813 79.7673 17.888C79.7566 18.0693 79.6659 18.288 79.4953 18.544C79.3246 18.8 79.0739 19.056 78.7433 19.312C78.4233 19.5573 78.0179 19.76 77.5273 19.92C77.0366 20.08 76.4659 20.16 75.8153 20.16ZM74.4553 14.992H77.1593V14.96C77.1593 14.6187 77.1059 14.32 76.9993 14.064C76.9033 13.808 76.7486 13.6107 76.5353 13.472C76.3326 13.3333 76.0873 13.264 75.7993 13.264C75.5113 13.264 75.2659 13.3333 75.0633 13.472C74.8713 13.6107 74.7219 13.808 74.6153 14.064C74.5086 14.32 74.4553 14.6187 74.4553 14.96V14.992ZM84.8993 20.16C84.2059 20.16 83.6139 20.0853 83.1233 19.936C82.6433 19.776 82.2486 19.584 81.9393 19.36C81.6406 19.136 81.4166 18.9067 81.2673 18.672C81.1179 18.4267 81.0379 18.2187 81.0273 18.048C81.0166 17.9307 81.0539 17.8347 81.1393 17.76C81.2246 17.6747 81.3153 17.632 81.4113 17.632H83.2353C83.2673 17.632 83.2939 17.6373 83.3153 17.648C83.3366 17.6587 83.3686 17.68 83.4113 17.712C83.5499 17.7867 83.6886 17.8827 83.8273 18C83.9659 18.1067 84.1259 18.2027 84.3073 18.288C84.4886 18.3733 84.7073 18.416 84.9633 18.416C85.2619 18.416 85.5126 18.3573 85.7153 18.24C85.9179 18.1227 86.0193 17.9467 86.0193 17.712C86.0193 17.5413 85.9713 17.4027 85.8753 17.296C85.7793 17.1787 85.5819 17.0667 85.2833 16.96C84.9953 16.8533 84.5579 16.7467 83.9713 16.64C83.4166 16.512 82.9313 16.3467 82.5153 16.144C82.0993 15.9307 81.7793 15.6587 81.5553 15.328C81.3313 14.9867 81.2193 14.576 81.2193 14.096C81.2193 13.6693 81.3579 13.2587 81.6353 12.864C81.9126 12.4693 82.3179 12.1493 82.8513 11.904C83.3846 11.648 84.0406 11.52 84.8193 11.52C85.4379 11.52 85.9713 11.5947 86.4193 11.744C86.8779 11.8827 87.2619 12.064 87.5713 12.288C87.8913 12.512 88.1313 12.7413 88.2913 12.976C88.4513 13.2107 88.5366 13.424 88.5473 13.616C88.5579 13.7227 88.5259 13.8187 88.4513 13.904C88.3766 13.9787 88.2913 14.016 88.1953 14.016H86.5313C86.4886 14.016 86.4459 14.0107 86.4033 14C86.3606 13.9787 86.3233 13.9573 86.2913 13.936C86.1633 13.872 86.0353 13.7867 85.9073 13.68C85.7793 13.5733 85.6299 13.4773 85.4593 13.392C85.2886 13.3067 85.0753 13.264 84.8193 13.264C84.5313 13.264 84.3073 13.328 84.1473 13.456C83.9873 13.584 83.9073 13.7493 83.9073 13.952C83.9073 14.0907 83.9499 14.2187 84.0353 14.336C84.1313 14.4533 84.3179 14.56 84.5953 14.656C84.8833 14.752 85.3259 14.8587 85.9233 14.976C86.6593 15.0933 87.2459 15.2853 87.6833 15.552C88.1206 15.808 88.4299 16.112 88.6112 16.464C88.7926 16.8053 88.8833 17.168 88.8833 17.552C88.8833 18.064 88.7286 18.5173 88.4193 18.912C88.1206 19.3067 87.6726 19.616 87.0753 19.84C86.4779 20.0533 85.7526 20.16 84.8993 20.16Z'
                fill='white'
              />
            </svg>
          </a>
          <div className='box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              className='search-icon'
              fill='black'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
            </svg>
            <input type='text' placeholder='Search...' />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
