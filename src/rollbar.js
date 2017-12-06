import Rollbar from 'rollbar';

// 检测、诊断和调试错误
if (location.host === 'dva.sosout.com') {
  Rollbar.init({
    accessToken: 'a7bfb90e615c42cbb4bd11196ae23afd',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  });
}
