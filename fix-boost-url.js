const fs = require('fs');
const path = require('path');

const boostPodspecPath = path.resolve(__dirname, 'node_modules/react-native/third-party-podspecs/boost.podspec');

try {
  let content = fs.readFileSync(boostPodspecPath, 'utf8');

  const oldUrl = 'https://boostorg.jfrog.io/artifactory/main/release/1.76.0/source/boost_1_76_0.tar.bz2';
  const newUrl = 'https://archives.boost.io/release/1.76.0/source/boost_1_76_0.tar.bz2';

  if (content.includes(oldUrl)) {
    content = content.replace(oldUrl, newUrl);
    fs.writeFileSync(boostPodspecPath, content, 'utf8');
    console.log('✅ Boost URL fixed in boost.podspec');
  } else {
    console.log('ℹ️ Boost URL already patched or not found.');
  }
} catch (error) {
  console.error('❌ Failed to patch boost.podspec:', error);
}
