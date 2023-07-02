import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aryan",
    lastName: "More",
    username: "aryanmore2110",
    image: 'https://lh3.googleusercontent.com/pw/AJFCJaUVvxbZOyeSoovHA2W70vILB0lm3iD6mZ5_BMzTlcmt5KHcb7IqLFVEYj8RIbYpxFCNkAXGHtGGSui2rzrl5A0GecRX8YKx-M3Do1g0EyyA9HkkhZnbLweiDicXUElA2y4k3LLSPp8nYCj3NZludxUwCm30N1nWlmqMuMzTsDhJxPtkt3qEoXabyYE4NTyihNHn4yjVl5_Loa8Xu5wSzQMgg3Phy7RzppO10kVc87bOC0Ztr_Noy6HU8jUGcPdjRlCG8EUoM4JYhxZuuiT4q9yHovqBWDYeCfUvJWqk1M3TDf4B9cvCqio-SW4Jp1dAyiI4LVBlYgUm_qL6jaXWM6JZP8Gllwk00CX9dTzulHLcEjr7vP-6s3ZrJj7_lYneUxX0o3Bzd594JeABwcx9bf1B7zgd6-Xx2F3dwWmx9Z5jcISIVPIjGqdT3NG5nOsk5MU0XxKRDhVIbwCCe3DjeaSYxNJLKZWScJQv0oCJZvrtjGYm2o91q0fDWbGgVI7ZeXWC_qpdr_QAdob9rymg4Y0hG8I40GJI9NhxSsSv2307fMJfloE-ErDdDMgsVr8npHVGL752K1Sh2jXcTlgwHdiefjmaUsEnYm3yZJFo8ZT8POCf2x4mNWpB-W_N2za4W-7nLn-2IMkdw3ARpiOwBVHW1aDGzB24ydmoFlXO2UpE35QhPuChgYTY4sIrMmeHRYadcxnPPrb_Joaqd_Mmv18Wqp5QfYb_UzNxZLyY_VcILByMP6t6yt04qQzaOrZVamkpaVRkCk78-h2RIwmVNM2fwwT4ruocX5dmygIls2-H6NqCPnAqG7s5rxUydc2Cn53_9hLncJsDbmroc9gM4DzM8HZ6jTSy5VpfSJqiMa7Tq7likYw3W89GzN8LplUDPeKRwSNC9inBUnW-7hE-ZwI=w730-h903-s-no?authuser=0',
    password: "aryanmore",
    bookmarks: [],
    bio: "Aspiring MERN Stack",
    portfolio: "https://portfolioaryan.netlify.app/",
    followers: [
      {
        _id: 'rupeshsoni',
        fullName: 'Rupesh Soni',
        userName: 'rupsoni',
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaWcR8WKu8gr-25GTKw7n8eqjEiV8okDQMeeWhZIyLVtEP0UP2Kl6jBE3sMywzexwWna9UUZRishnnDjQd-eXq0BQAzW5wy3TQxyIO-jCxKt_f44vdz7TS0-P3Ron8RLmFmRaF5NntFNvkVmBMogAq-akeYlExgm1fN6SrKY5wD2JBki85pxucZdXcNJwWssWsnh_vscfZe9AWhZfD_5N-lwSRYWO7LanrF7DJX1B3s_JhgM7ledAfWXoJwke2tIxB8gwZ9cNZhfH1ky1jyrItt84FpvRJOf1qxwTL2-vSjq0m5YCyfTEOfG_omapBnESHc52suYWVro0N4tRa0GyoSA3zz_1JWWf9uzM79Q73dAHwLRxdKme70xmfx9DF_c_OeAHaeJT7NBpvwPiHhfdYNm0BXkNcpYq6JB1_AAV4UDcKzUAps-wB7fkdo-RnVCXQgPO_1e2MqBiYJro3-l_P7nskF74W3QPjpZxLx7hx2-4U4Bs_Br63rEM9MEgAANyHznf79aA9ZCD6EOdwmA_sbuR-cvgDLtryFIRaenWxC-f_39wkZeW51j2zEOO3xx3wl89-tJC4S9M_KoQU3ZDv8L2PHzteGIykVLBcY07gWSTi8UZwKJiesGHnRvhPqNoYCVj1ivfIAl5hwxC1MFOifl3MqVYhu0bIeyxWjPhnO4XcBervmCjB5IVDfZF0j_NDiAyJXlp1aX7DvPefUbDP9_IZGjfYY0eYuMMkyVSE6hgrvy07uROmcJKAZrrkYhXyN4pe3sxmNun0dawoJmYqhZiWZC6F45m8aMmP09gK9wXI9uUaOu4kZow2opxGMAEOFej03MM4GvrKDu6SPZ4ICkc7fnxI_OomJvAtcG2qotrwMUneBhsIPKs00t6m72boXuJZyuqOXyx_yuXRRxYe4=w903-h903-s-no?authuser=0',
      },
      {
        _id: 'yashmali',
        fullName: 'Yash Mali',
        userName: 'yashmali',
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaWLPUvLx7i_OAbhzf55DsoQBL7g_Cr6UyFqtcrMCKgYOYV--Wpa4MvbPZEWnlHYwfp8gODO6ZdtGB0gfkZc4t2a9syCZDOoKPva2Cy33QcVexT_7G6ECnLXcr0dmgikrb-t0nzBEOb7l59WXtzj6OjhsGp9L7B5ajETfVrJLi4ooxoh-5mSq1MP9ME803xzX_UEb0-j3V0r48KLgrWngSfk2P4BrD0VbKUtrhoQwsNH99mFOOqJcZtX0nfbOeOfzWX9CqQ9eoV0nUVe9s9LmIBjhoZGUc24OJPI2tersSfM_5LsQ4VyPkYHQRxRc2va8DCumsZOiUB0MMWySMrksYqYZOlZT6CeZiOI8YqvQXlxsepG0N5NzbSsxvkPU5C4GrJ8RmR797JVc3hfEXXyU5v8nCmypVBW1Luw8s7YB8ylwkfO-nJYtbpWNSAfim0_csFo8myG_tVcu6WfyFLHVmltK0mFMG0Nh1HsGnu7w0_rAjdQmSjKL7IDReF9lPe7s1pdknwBHh4GJ-W-hJnoGeCamnhRZ9jtrzXKoi8ON1wvRx-yiMdotPqTB9SwsbpVWEVKTg3LyW34GSofkRNtm4BV2mwAPYVsGWpLwaDcZA53xyFd-uVGRiGVF5mlyJwn4F_KRUmH49iOtIvK7DQM-j_-fPF6mchteYEM8akTYPgzROhn-rXK0br-X1neXDOxjxBbXyZz9TxJxXLk-QKsLB6wJuyoLAYCyxNJZInLSlx6nwPEkCFF1uVqpaFOkwFZRnKK4MWaVUoEVtx8ywk72zyzY1X3uX1C74KSTEknx3jzJg2WfDgeVt1qYHamDm_4J8cyB7S_VTgC5VvbMDzpAIj8zWOqqGDHexKj5pEQWSp4Tu4RblacdCSX4Wzkwd9lVPZq_QGHGCNpdNa6t8jFgts=w894-h903-s-no?authuser=0',
      },
      {
        _id: 'tirthbaraiya',
        fullName: 'Tirth baraiya',
        userName: 'tirthbaraiya',
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaVW-lg_DHHp19Oj5YlPwvLgk6-dXAQZj9q-lPmhrR8tz2aobPXIfjudJcsPaS64StW66BbQMaSuER-6SdNd2Jvyd_l6ZMbSu59e1HX8Ec5HO2ri47nMoTgC14NUn3355p3gf5klThaSkcx4eKR0Kei7vmyrLmo8n6-YeSKE6sN7r8htEYEytgCXj69nnlVbvHnwdQrxUDGsmOZumMX4tyf1f30dJ0Z5ByGxHjlre6WpiIoF2D3lqxof0YzSq8GbeCe0MTH5TyKm4ErdRsPdqn0GTBUMkzcYZxfW0MxDZb8GX9KfoFv8bqc-CRMRPWGA5yPP2d_fP3ca4QfQgrC0wPkk_eRbMpqG27d47AwjlvjRHMyK7WozMfRIhZzwNCQ62S8cybwbjU_BNWDbfrUjja2nXHPYLE_HiINRwNQHh7za35lTlH2RSpiYrL44zJGp9NcLLekaPyk3I1flK8rpLjYSUtJLNSLodI9guCWQLnVYCwkc3xS3odmnFGXt3FLv4C3IPVKjw9pQY5hIrD-26lzZOm2R3GoBbe-VLI2QsNcnUIo6zKoE5b3VDpkb6FFokx8T29E6oBiDvTwp2QlVH1GxbMf2Ui1zxgWMSrxHmwazM2zIIVZy9rDt2meCjkL34NLYKZzWet7jRrQJI87jSNutLR1-ulB_qBg6zMoz6i-tr1UEJslNGmdoXkMtcA9p98iIGNPSzTiZPTifnhJi4rprlwLqePvVY44wVv6yyKN-frFcWRvMv1cGYTFzQ9iYrAECyjdwmN88hLVhunHjpSx5b8lozTimIe4oIwesmEnKpy7zC2VKSEa-fm0jhZQzBG2dLU_xiFY1Xc-3pJAN6WrX9bd_1jJE1_W-qk2-DZAfJrCVFUudePhLTxVB6JpB-LTgXbCrk5quzzVNCNvKLg=w1204-h903-s-no?authuser=0',
      },
    ],
    following: [
      {
        _id: 'rupeshsoni',
        fullName: 'Rupesh Soni',
        userName: 'rupsoni',
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaWcR8WKu8gr-25GTKw7n8eqjEiV8okDQMeeWhZIyLVtEP0UP2Kl6jBE3sMywzexwWna9UUZRishnnDjQd-eXq0BQAzW5wy3TQxyIO-jCxKt_f44vdz7TS0-P3Ron8RLmFmRaF5NntFNvkVmBMogAq-akeYlExgm1fN6SrKY5wD2JBki85pxucZdXcNJwWssWsnh_vscfZe9AWhZfD_5N-lwSRYWO7LanrF7DJX1B3s_JhgM7ledAfWXoJwke2tIxB8gwZ9cNZhfH1ky1jyrItt84FpvRJOf1qxwTL2-vSjq0m5YCyfTEOfG_omapBnESHc52suYWVro0N4tRa0GyoSA3zz_1JWWf9uzM79Q73dAHwLRxdKme70xmfx9DF_c_OeAHaeJT7NBpvwPiHhfdYNm0BXkNcpYq6JB1_AAV4UDcKzUAps-wB7fkdo-RnVCXQgPO_1e2MqBiYJro3-l_P7nskF74W3QPjpZxLx7hx2-4U4Bs_Br63rEM9MEgAANyHznf79aA9ZCD6EOdwmA_sbuR-cvgDLtryFIRaenWxC-f_39wkZeW51j2zEOO3xx3wl89-tJC4S9M_KoQU3ZDv8L2PHzteGIykVLBcY07gWSTi8UZwKJiesGHnRvhPqNoYCVj1ivfIAl5hwxC1MFOifl3MqVYhu0bIeyxWjPhnO4XcBervmCjB5IVDfZF0j_NDiAyJXlp1aX7DvPefUbDP9_IZGjfYY0eYuMMkyVSE6hgrvy07uROmcJKAZrrkYhXyN4pe3sxmNun0dawoJmYqhZiWZC6F45m8aMmP09gK9wXI9uUaOu4kZow2opxGMAEOFej03MM4GvrKDu6SPZ4ICkc7fnxI_OomJvAtcG2qotrwMUneBhsIPKs00t6m72boXuJZyuqOXyx_yuXRRxYe4=w903-h903-s-no?authuser=0',
      },
      {
        _id: 'yashmali',
        fullName: 'Yash Mali',
        userName: 'yashmali',
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaWLPUvLx7i_OAbhzf55DsoQBL7g_Cr6UyFqtcrMCKgYOYV--Wpa4MvbPZEWnlHYwfp8gODO6ZdtGB0gfkZc4t2a9syCZDOoKPva2Cy33QcVexT_7G6ECnLXcr0dmgikrb-t0nzBEOb7l59WXtzj6OjhsGp9L7B5ajETfVrJLi4ooxoh-5mSq1MP9ME803xzX_UEb0-j3V0r48KLgrWngSfk2P4BrD0VbKUtrhoQwsNH99mFOOqJcZtX0nfbOeOfzWX9CqQ9eoV0nUVe9s9LmIBjhoZGUc24OJPI2tersSfM_5LsQ4VyPkYHQRxRc2va8DCumsZOiUB0MMWySMrksYqYZOlZT6CeZiOI8YqvQXlxsepG0N5NzbSsxvkPU5C4GrJ8RmR797JVc3hfEXXyU5v8nCmypVBW1Luw8s7YB8ylwkfO-nJYtbpWNSAfim0_csFo8myG_tVcu6WfyFLHVmltK0mFMG0Nh1HsGnu7w0_rAjdQmSjKL7IDReF9lPe7s1pdknwBHh4GJ-W-hJnoGeCamnhRZ9jtrzXKoi8ON1wvRx-yiMdotPqTB9SwsbpVWEVKTg3LyW34GSofkRNtm4BV2mwAPYVsGWpLwaDcZA53xyFd-uVGRiGVF5mlyJwn4F_KRUmH49iOtIvK7DQM-j_-fPF6mchteYEM8akTYPgzROhn-rXK0br-X1neXDOxjxBbXyZz9TxJxXLk-QKsLB6wJuyoLAYCyxNJZInLSlx6nwPEkCFF1uVqpaFOkwFZRnKK4MWaVUoEVtx8ywk72zyzY1X3uX1C74KSTEknx3jzJg2WfDgeVt1qYHamDm_4J8cyB7S_VTgC5VvbMDzpAIj8zWOqqGDHexKj5pEQWSp4Tu4RblacdCSX4Wzkwd9lVPZq_QGHGCNpdNa6t8jFgts=w894-h903-s-no?authuser=0',
      },
      {
        _id: 'tirthbaraiya',
        fullName: 'Tirth baraiya',
        userName: 'tirthbaraiya',
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaVW-lg_DHHp19Oj5YlPwvLgk6-dXAQZj9q-lPmhrR8tz2aobPXIfjudJcsPaS64StW66BbQMaSuER-6SdNd2Jvyd_l6ZMbSu59e1HX8Ec5HO2ri47nMoTgC14NUn3355p3gf5klThaSkcx4eKR0Kei7vmyrLmo8n6-YeSKE6sN7r8htEYEytgCXj69nnlVbvHnwdQrxUDGsmOZumMX4tyf1f30dJ0Z5ByGxHjlre6WpiIoF2D3lqxof0YzSq8GbeCe0MTH5TyKm4ErdRsPdqn0GTBUMkzcYZxfW0MxDZb8GX9KfoFv8bqc-CRMRPWGA5yPP2d_fP3ca4QfQgrC0wPkk_eRbMpqG27d47AwjlvjRHMyK7WozMfRIhZzwNCQ62S8cybwbjU_BNWDbfrUjja2nXHPYLE_HiINRwNQHh7za35lTlH2RSpiYrL44zJGp9NcLLekaPyk3I1flK8rpLjYSUtJLNSLodI9guCWQLnVYCwkc3xS3odmnFGXt3FLv4C3IPVKjw9pQY5hIrD-26lzZOm2R3GoBbe-VLI2QsNcnUIo6zKoE5b3VDpkb6FFokx8T29E6oBiDvTwp2QlVH1GxbMf2Ui1zxgWMSrxHmwazM2zIIVZy9rDt2meCjkL34NLYKZzWet7jRrQJI87jSNutLR1-ulB_qBg6zMoz6i-tr1UEJslNGmdoXkMtcA9p98iIGNPSzTiZPTifnhJi4rprlwLqePvVY44wVv6yyKN-frFcWRvMv1cGYTFzQ9iYrAECyjdwmN88hLVhunHjpSx5b8lozTimIe4oIwesmEnKpy7zC2VKSEa-fm0jhZQzBG2dLU_xiFY1Xc-3pJAN6WrX9bd_1jJE1_W-qk2-DZAfJrCVFUudePhLTxVB6JpB-LTgXbCrk5quzzVNCNvKLg=w1204-h903-s-no?authuser=0',
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];


// export const users = [
//   {
//     _id: uuid(),
//     fullName: "Aryan More",
//     userName: "aryanmore2110",
//     image: 'https://lh3.googleusercontent.com/pw/AJFCJaUVvxbZOyeSoovHA2W70vILB0lm3iD6mZ5_BMzTlcmt5KHcb7IqLFVEYj8RIbYpxFCNkAXGHtGGSui2rzrl5A0GecRX8YKx-M3Do1g0EyyA9HkkhZnbLweiDicXUElA2y4k3LLSPp8nYCj3NZludxUwCm30N1nWlmqMuMzTsDhJxPtkt3qEoXabyYE4NTyihNHn4yjVl5_Loa8Xu5wSzQMgg3Phy7RzppO10kVc87bOC0Ztr_Noy6HU8jUGcPdjRlCG8EUoM4JYhxZuuiT4q9yHovqBWDYeCfUvJWqk1M3TDf4B9cvCqio-SW4Jp1dAyiI4LVBlYgUm_qL6jaXWM6JZP8Gllwk00CX9dTzulHLcEjr7vP-6s3ZrJj7_lYneUxX0o3Bzd594JeABwcx9bf1B7zgd6-Xx2F3dwWmx9Z5jcISIVPIjGqdT3NG5nOsk5MU0XxKRDhVIbwCCe3DjeaSYxNJLKZWScJQv0oCJZvrtjGYm2o91q0fDWbGgVI7ZeXWC_qpdr_QAdob9rymg4Y0hG8I40GJI9NhxSsSv2307fMJfloE-ErDdDMgsVr8npHVGL752K1Sh2jXcTlgwHdiefjmaUsEnYm3yZJFo8ZT8POCf2x4mNWpB-W_N2za4W-7nLn-2IMkdw3ARpiOwBVHW1aDGzB24ydmoFlXO2UpE35QhPuChgYTY4sIrMmeHRYadcxnPPrb_Joaqd_Mmv18Wqp5QfYb_UzNxZLyY_VcILByMP6t6yt04qQzaOrZVamkpaVRkCk78-h2RIwmVNM2fwwT4ruocX5dmygIls2-H6NqCPnAqG7s5rxUydc2Cn53_9hLncJsDbmroc9gM4DzM8HZ6jTSy5VpfSJqiMa7Tq7likYw3W89GzN8LplUDPeKRwSNC9inBUnW-7hE-ZwI=w730-h903-s-no?authuser=0',
//     password: "aryanmore",
//     bookmarks: [],
//     bio: "Aspiring MERN Stack",
//     portfolio: "https://portfolioaryan.netlify.app/",
//     followers: [
//       {
//         _id: 'rupeshsoni',
//         fullName: 'Rupesh Soni',
//         userName: 'rupsoni',
//         image: 'https://lh3.googleusercontent.com/pw/AJFCJaWcR8WKu8gr-25GTKw7n8eqjEiV8okDQMeeWhZIyLVtEP0UP2Kl6jBE3sMywzexwWna9UUZRishnnDjQd-eXq0BQAzW5wy3TQxyIO-jCxKt_f44vdz7TS0-P3Ron8RLmFmRaF5NntFNvkVmBMogAq-akeYlExgm1fN6SrKY5wD2JBki85pxucZdXcNJwWssWsnh_vscfZe9AWhZfD_5N-lwSRYWO7LanrF7DJX1B3s_JhgM7ledAfWXoJwke2tIxB8gwZ9cNZhfH1ky1jyrItt84FpvRJOf1qxwTL2-vSjq0m5YCyfTEOfG_omapBnESHc52suYWVro0N4tRa0GyoSA3zz_1JWWf9uzM79Q73dAHwLRxdKme70xmfx9DF_c_OeAHaeJT7NBpvwPiHhfdYNm0BXkNcpYq6JB1_AAV4UDcKzUAps-wB7fkdo-RnVCXQgPO_1e2MqBiYJro3-l_P7nskF74W3QPjpZxLx7hx2-4U4Bs_Br63rEM9MEgAANyHznf79aA9ZCD6EOdwmA_sbuR-cvgDLtryFIRaenWxC-f_39wkZeW51j2zEOO3xx3wl89-tJC4S9M_KoQU3ZDv8L2PHzteGIykVLBcY07gWSTi8UZwKJiesGHnRvhPqNoYCVj1ivfIAl5hwxC1MFOifl3MqVYhu0bIeyxWjPhnO4XcBervmCjB5IVDfZF0j_NDiAyJXlp1aX7DvPefUbDP9_IZGjfYY0eYuMMkyVSE6hgrvy07uROmcJKAZrrkYhXyN4pe3sxmNun0dawoJmYqhZiWZC6F45m8aMmP09gK9wXI9uUaOu4kZow2opxGMAEOFej03MM4GvrKDu6SPZ4ICkc7fnxI_OomJvAtcG2qotrwMUneBhsIPKs00t6m72boXuJZyuqOXyx_yuXRRxYe4=w903-h903-s-no?authuser=0',
//       },
//       {
//         _id: 'yashmali',
//         fullName: 'Yash Mali',
//         userName: 'yashmali',
//         image: 'https://lh3.googleusercontent.com/pw/AJFCJaWLPUvLx7i_OAbhzf55DsoQBL7g_Cr6UyFqtcrMCKgYOYV--Wpa4MvbPZEWnlHYwfp8gODO6ZdtGB0gfkZc4t2a9syCZDOoKPva2Cy33QcVexT_7G6ECnLXcr0dmgikrb-t0nzBEOb7l59WXtzj6OjhsGp9L7B5ajETfVrJLi4ooxoh-5mSq1MP9ME803xzX_UEb0-j3V0r48KLgrWngSfk2P4BrD0VbKUtrhoQwsNH99mFOOqJcZtX0nfbOeOfzWX9CqQ9eoV0nUVe9s9LmIBjhoZGUc24OJPI2tersSfM_5LsQ4VyPkYHQRxRc2va8DCumsZOiUB0MMWySMrksYqYZOlZT6CeZiOI8YqvQXlxsepG0N5NzbSsxvkPU5C4GrJ8RmR797JVc3hfEXXyU5v8nCmypVBW1Luw8s7YB8ylwkfO-nJYtbpWNSAfim0_csFo8myG_tVcu6WfyFLHVmltK0mFMG0Nh1HsGnu7w0_rAjdQmSjKL7IDReF9lPe7s1pdknwBHh4GJ-W-hJnoGeCamnhRZ9jtrzXKoi8ON1wvRx-yiMdotPqTB9SwsbpVWEVKTg3LyW34GSofkRNtm4BV2mwAPYVsGWpLwaDcZA53xyFd-uVGRiGVF5mlyJwn4F_KRUmH49iOtIvK7DQM-j_-fPF6mchteYEM8akTYPgzROhn-rXK0br-X1neXDOxjxBbXyZz9TxJxXLk-QKsLB6wJuyoLAYCyxNJZInLSlx6nwPEkCFF1uVqpaFOkwFZRnKK4MWaVUoEVtx8ywk72zyzY1X3uX1C74KSTEknx3jzJg2WfDgeVt1qYHamDm_4J8cyB7S_VTgC5VvbMDzpAIj8zWOqqGDHexKj5pEQWSp4Tu4RblacdCSX4Wzkwd9lVPZq_QGHGCNpdNa6t8jFgts=w894-h903-s-no?authuser=0',
//       },
//       {
//         _id: 'tirthbaraiya',
//         fullName: 'Tirth baraiya',
//         userName: 'tirthbaraiya',
//         image: 'https://lh3.googleusercontent.com/pw/AJFCJaVW-lg_DHHp19Oj5YlPwvLgk6-dXAQZj9q-lPmhrR8tz2aobPXIfjudJcsPaS64StW66BbQMaSuER-6SdNd2Jvyd_l6ZMbSu59e1HX8Ec5HO2ri47nMoTgC14NUn3355p3gf5klThaSkcx4eKR0Kei7vmyrLmo8n6-YeSKE6sN7r8htEYEytgCXj69nnlVbvHnwdQrxUDGsmOZumMX4tyf1f30dJ0Z5ByGxHjlre6WpiIoF2D3lqxof0YzSq8GbeCe0MTH5TyKm4ErdRsPdqn0GTBUMkzcYZxfW0MxDZb8GX9KfoFv8bqc-CRMRPWGA5yPP2d_fP3ca4QfQgrC0wPkk_eRbMpqG27d47AwjlvjRHMyK7WozMfRIhZzwNCQ62S8cybwbjU_BNWDbfrUjja2nXHPYLE_HiINRwNQHh7za35lTlH2RSpiYrL44zJGp9NcLLekaPyk3I1flK8rpLjYSUtJLNSLodI9guCWQLnVYCwkc3xS3odmnFGXt3FLv4C3IPVKjw9pQY5hIrD-26lzZOm2R3GoBbe-VLI2QsNcnUIo6zKoE5b3VDpkb6FFokx8T29E6oBiDvTwp2QlVH1GxbMf2Ui1zxgWMSrxHmwazM2zIIVZy9rDt2meCjkL34NLYKZzWet7jRrQJI87jSNutLR1-ulB_qBg6zMoz6i-tr1UEJslNGmdoXkMtcA9p98iIGNPSzTiZPTifnhJi4rprlwLqePvVY44wVv6yyKN-frFcWRvMv1cGYTFzQ9iYrAECyjdwmN88hLVhunHjpSx5b8lozTimIe4oIwesmEnKpy7zC2VKSEa-fm0jhZQzBG2dLU_xiFY1Xc-3pJAN6WrX9bd_1jJE1_W-qk2-DZAfJrCVFUudePhLTxVB6JpB-LTgXbCrk5quzzVNCNvKLg=w1204-h903-s-no?authuser=0',
//       },
//     ],
//     following: [
//       {
//         _id: 'rupeshsoni',
//         fullName: 'Rupesh Soni',
//         userName: 'rupsoni',
//         image: 'https://lh3.googleusercontent.com/pw/AJFCJaWcR8WKu8gr-25GTKw7n8eqjEiV8okDQMeeWhZIyLVtEP0UP2Kl6jBE3sMywzexwWna9UUZRishnnDjQd-eXq0BQAzW5wy3TQxyIO-jCxKt_f44vdz7TS0-P3Ron8RLmFmRaF5NntFNvkVmBMogAq-akeYlExgm1fN6SrKY5wD2JBki85pxucZdXcNJwWssWsnh_vscfZe9AWhZfD_5N-lwSRYWO7LanrF7DJX1B3s_JhgM7ledAfWXoJwke2tIxB8gwZ9cNZhfH1ky1jyrItt84FpvRJOf1qxwTL2-vSjq0m5YCyfTEOfG_omapBnESHc52suYWVro0N4tRa0GyoSA3zz_1JWWf9uzM79Q73dAHwLRxdKme70xmfx9DF_c_OeAHaeJT7NBpvwPiHhfdYNm0BXkNcpYq6JB1_AAV4UDcKzUAps-wB7fkdo-RnVCXQgPO_1e2MqBiYJro3-l_P7nskF74W3QPjpZxLx7hx2-4U4Bs_Br63rEM9MEgAANyHznf79aA9ZCD6EOdwmA_sbuR-cvgDLtryFIRaenWxC-f_39wkZeW51j2zEOO3xx3wl89-tJC4S9M_KoQU3ZDv8L2PHzteGIykVLBcY07gWSTi8UZwKJiesGHnRvhPqNoYCVj1ivfIAl5hwxC1MFOifl3MqVYhu0bIeyxWjPhnO4XcBervmCjB5IVDfZF0j_NDiAyJXlp1aX7DvPefUbDP9_IZGjfYY0eYuMMkyVSE6hgrvy07uROmcJKAZrrkYhXyN4pe3sxmNun0dawoJmYqhZiWZC6F45m8aMmP09gK9wXI9uUaOu4kZow2opxGMAEOFej03MM4GvrKDu6SPZ4ICkc7fnxI_OomJvAtcG2qotrwMUneBhsIPKs00t6m72boXuJZyuqOXyx_yuXRRxYe4=w903-h903-s-no?authuser=0',
//       },
//       {
//         _id: 'yashmali',
//         fullName: 'Yash Mali',
//         userName: 'yashmali',
//         image: 'https://lh3.googleusercontent.com/pw/AJFCJaWLPUvLx7i_OAbhzf55DsoQBL7g_Cr6UyFqtcrMCKgYOYV--Wpa4MvbPZEWnlHYwfp8gODO6ZdtGB0gfkZc4t2a9syCZDOoKPva2Cy33QcVexT_7G6ECnLXcr0dmgikrb-t0nzBEOb7l59WXtzj6OjhsGp9L7B5ajETfVrJLi4ooxoh-5mSq1MP9ME803xzX_UEb0-j3V0r48KLgrWngSfk2P4BrD0VbKUtrhoQwsNH99mFOOqJcZtX0nfbOeOfzWX9CqQ9eoV0nUVe9s9LmIBjhoZGUc24OJPI2tersSfM_5LsQ4VyPkYHQRxRc2va8DCumsZOiUB0MMWySMrksYqYZOlZT6CeZiOI8YqvQXlxsepG0N5NzbSsxvkPU5C4GrJ8RmR797JVc3hfEXXyU5v8nCmypVBW1Luw8s7YB8ylwkfO-nJYtbpWNSAfim0_csFo8myG_tVcu6WfyFLHVmltK0mFMG0Nh1HsGnu7w0_rAjdQmSjKL7IDReF9lPe7s1pdknwBHh4GJ-W-hJnoGeCamnhRZ9jtrzXKoi8ON1wvRx-yiMdotPqTB9SwsbpVWEVKTg3LyW34GSofkRNtm4BV2mwAPYVsGWpLwaDcZA53xyFd-uVGRiGVF5mlyJwn4F_KRUmH49iOtIvK7DQM-j_-fPF6mchteYEM8akTYPgzROhn-rXK0br-X1neXDOxjxBbXyZz9TxJxXLk-QKsLB6wJuyoLAYCyxNJZInLSlx6nwPEkCFF1uVqpaFOkwFZRnKK4MWaVUoEVtx8ywk72zyzY1X3uX1C74KSTEknx3jzJg2WfDgeVt1qYHamDm_4J8cyB7S_VTgC5VvbMDzpAIj8zWOqqGDHexKj5pEQWSp4Tu4RblacdCSX4Wzkwd9lVPZq_QGHGCNpdNa6t8jFgts=w894-h903-s-no?authuser=0',
//       },
//       {
//         _id: 'tirthbaraiya',
//         fullName: 'Tirth baraiya',
//         userName: 'tirthbaraiya',
//         image: 'https://lh3.googleusercontent.com/pw/AJFCJaVW-lg_DHHp19Oj5YlPwvLgk6-dXAQZj9q-lPmhrR8tz2aobPXIfjudJcsPaS64StW66BbQMaSuER-6SdNd2Jvyd_l6ZMbSu59e1HX8Ec5HO2ri47nMoTgC14NUn3355p3gf5klThaSkcx4eKR0Kei7vmyrLmo8n6-YeSKE6sN7r8htEYEytgCXj69nnlVbvHnwdQrxUDGsmOZumMX4tyf1f30dJ0Z5ByGxHjlre6WpiIoF2D3lqxof0YzSq8GbeCe0MTH5TyKm4ErdRsPdqn0GTBUMkzcYZxfW0MxDZb8GX9KfoFv8bqc-CRMRPWGA5yPP2d_fP3ca4QfQgrC0wPkk_eRbMpqG27d47AwjlvjRHMyK7WozMfRIhZzwNCQ62S8cybwbjU_BNWDbfrUjja2nXHPYLE_HiINRwNQHh7za35lTlH2RSpiYrL44zJGp9NcLLekaPyk3I1flK8rpLjYSUtJLNSLodI9guCWQLnVYCwkc3xS3odmnFGXt3FLv4C3IPVKjw9pQY5hIrD-26lzZOm2R3GoBbe-VLI2QsNcnUIo6zKoE5b3VDpkb6FFokx8T29E6oBiDvTwp2QlVH1GxbMf2Ui1zxgWMSrxHmwazM2zIIVZy9rDt2meCjkL34NLYKZzWet7jRrQJI87jSNutLR1-ulB_qBg6zMoz6i-tr1UEJslNGmdoXkMtcA9p98iIGNPSzTiZPTifnhJi4rprlwLqePvVY44wVv6yyKN-frFcWRvMv1cGYTFzQ9iYrAECyjdwmN88hLVhunHjpSx5b8lozTimIe4oIwesmEnKpy7zC2VKSEa-fm0jhZQzBG2dLU_xiFY1Xc-3pJAN6WrX9bd_1jJE1_W-qk2-DZAfJrCVFUudePhLTxVB6JpB-LTgXbCrk5quzzVNCNvKLg=w1204-h903-s-no?authuser=0',
//       },
//     ],
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   // {
//   //   _id: uuid(),
//   //   fullName: 'Emily Thompson',
//   //   userName: 'emilyt',
//   //   image: 'profile_image_emilyt.jpg',
//   //   password: 'mypassword',
//   //   bookmarks: [],
//   //   bio: 'Passionate about environmental sustainability. Working towards a greener future for generations to come.',
//   //   portfolio: 'https://emilythompsonportfolio.com',
//   //   followers: [

//   //   ],
//   //   following: [

//   //   ],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: 'Robert Wilson',
//   //   userName: 'robertw',
//   //   image: 'profile_image_robertw.jpg',
//   //   password: 'pass123',
//   //   bookmarks: ['article7', 'video5', 'image3'],
//   //   bio: 'Travel enthusiast and adventurer. Exploring the world one step at a time and sharing stories along the way.',
//   //   portfolio: 'https://robertwilsonportfolio.com',
//   //   followers: [

//   //   ],
//   //   following: [

//   //   ],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: 'Sarah Davis',
//   //   userName: 'sarahdavis',
//   //   image: 'profile_image_sarahdavis.jpg',
//   //   password: 'secretpass',
//   //   bookmarks: ['video4', 'image2', 'article6'],
//   //   bio: 'Artist and illustrator. Drawing inspiration from nature and everyday life to create beautiful artworks.',
//   //   portfolio: 'https://sarahdavisportfolio.com',
//   //   followers: [

//   //   ],
//   //   following: [

//   //   ],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: 'Michael Johnson',
//   //   userName: 'michaelj',
//   //   image: 'profile_image_michaelj.jpg',
//   //   password: 'mypasswd',
//   //   bookmarks: ['article4', 'article5', 'video3'],
//   //   bio: 'Fitness and health advocate. Helping others achieve their goals through proper nutrition and exercise.',
//   //   portfolio: 'https://michaeljohnsonportfolio.com',
//   //   followers: [

//   //   ],
//   //   following: [

//   //   ],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: 'Jane Smith',
//   //   userName: 'janesmith',
//   //   image: 'profile_image_janesmith.jpg',
//   //   password: 'pass1234',
//   //   bookmarks: ['article3', 'video2', 'image1'],
//   //   bio: 'Photography enthusiast and nature lover. Always on the lookout for capturing beautiful moments.',
//   //   portfolio: 'https://janesmithportfolio.com',
//   //   followers: [

//   //   ],
//   //   following: [

//   //   ],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: 'John Doe',
//   //   userName: 'johndoe',
//   //   image: 'profile_image_johndoe.jpg',
//   //   password: 'password123',
//   //   bookmarks: ['article1', 'article2', 'video1'],
//   //   bio: 'I am a software engineer passionate about coding and building innovative applications.',
//   //   portfolio: 'https://johndoeportfolio.com',
//   //   followers: [

//   //   ],
//   //   following: [

//   //   ],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: "Rupesh Soni",
//   //   userName: "rupsoni1710",
//   //   image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-1/350681164_3103761429769728_4189018180040657944_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zSRdkvfDS0AAX-jGuze&_nc_ht=scontent.famd5-3.fna&oh=00_AfC9SOl6HxsUK7KC1YSFKOKMdFjawtAQeP-VrT_1fsZj8Q&oe=648F30C1',
//   //   password: "rupeshsoni",
//   //   bookmarks: [],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: "Yash Mali",
//   //   userName: "yashmali1204",
//   //   image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-1/286390165_1647467638971912_4797441917714999667_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SK_dHuZkgNAAX-NTnc1&_nc_oc=AQma2WVEprtjsMNNjRDp66ULw5tIYdAXOQHms-LmntK_Vot3U5_GveCdOrGHBqVHUNE&_nc_ht=scontent.famd5-2.fna&oh=00_AfDiuqiAnnF5DwDuD0IIzD_xdgHpqzR95rdR1Ay9AFj8vQ&oe=64902242',
//   //   password: "yashmali",
//   //   bookmarks: [],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: "Tirth Baraiya",
//   //   userName: "tirthbaraiya2009",
//   //   image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/352573352_1519649135105568_3861437413623232939_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hqk6dln4C4EAX_irTkV&_nc_ht=scontent.famd5-2.fna&oh=00_AfBKo7ry2CgkuR18jhaVo2ECTPPZ80Z9PVddgfCGleH44g&oe=648FE19A',
//   //   password: "tirthbaraiya",
//   //   bookmarks: [],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: "Viren Patel",
//   //   userName: "virenpatel1906",
//   //   image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-1/293820356_3224368154446332_4033355715756441259_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=IlOas29w0WgAX_800md&_nc_ht=scontent.famd5-3.fna&oh=00_AfDopKQyLFxwTBwV-oY5nlxxZYQccgwYAdPuUwrRQRi2-g&oe=64905582',
//   //   password: "virenpatel",
//   //   bookmarks: [],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
//   // {
//   //   _id: uuid(),
//   //   fullName: "Vishal Chetnani",
//   //   userName: "vishalchetnani0411",
//   //   image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-6/242871763_1854243358117975_4762510285532834133_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C4lhgfXR8jEAX9-x8iz&_nc_ht=scontent.famd5-3.fna&oh=00_AfD70TWW_2yv5AFFkuKXtved9yORdGtzpDMV2eb2KXVdfw&oe=648F4C15',
//   //   password: "vishalchetnani",
//   //   bookmarks: [],
//   //   createdAt: formatDate(),
//   //   updatedAt: formatDate(),
//   // },
// ];
