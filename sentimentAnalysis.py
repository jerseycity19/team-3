import nltk
import random
from nltk.classify.scikitlearn import SklearnClassifier
import pickle
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.linear_model import LogisticRegression, SGDClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC
from nltk.classify import ClassifierI
from statistics import mode
from nltk.tokenize import word_tokenize
import re
from nltk.corpus import stopwords
import os

files_pos = os.listdir('train/pos')
files_pos = [open('train/pos/'+f, 'r').read() for f in files_pos]
files_neg = os.listdir('train/neg')
files_neg = [open('train/neg/'+f, 'r').read() for f in files_neg]


all_words = []
documents = []

stop_words = list(set(stopwords.words('english')))

#  j is adject, r is adverb, and v is verb
#allowed_word_types = ["J","R","V"]
allowed_word_types = ["J"]

for p in  files_pos:

    # create a list of tuples where the first element of each tuple is a review
    # the second element is the label
    documents.append( (p, "pos") )

    # remove punctuations
    cleaned = re.sub(r'[^(a-zA-Z)\s]','', p)

    # tokenize
    tokenized = word_tokenize(cleaned)

    # remove stopwords
    stopped = [w for w in tokenized if not w in stop_words]

    # parts of speech tagging for each word
    pos = nltk.pos_tag(stopped)

    # make a list of  all adjectives identified by the allowed word types list above
    for w in pos:
        if w[1][0] in allowed_word_types:
            all_words.append(w[0].lower())

for p in files_neg:
    # create a list of tuples where the first element of each tuple is a review
    # the second element is the label
    documents.append( (p, "neg") )

    # remove punctuations
    cleaned = re.sub(r'[^(a-zA-Z)\s]','', p)

    # tokenize
    tokenized = word_tokenize(cleaned)

    # remove stopwords
    stopped = [w for w in tokenized if not w in stop_words]

    # parts of speech tagging for each word
    neg = nltk.pos_tag(stopped)

    # make a list of  all adjectives identified by the allowed word types list above
    for w in neg:
        if w[1][0] in allowed_word_types:
            all_words.append(w[0].lower())

# creating a frequency distribution of each adjectives.
all_words = nltk.FreqDist(all_words)

# listing the 5000 most frequent words
word_features = list(all_words.keys())[:5000]

# function to create a dictionary of features for each review in the list document.
# The keys are the words in word_features
# The values of each key are either true or false for wether that feature appears in the review or not

def find_features(document):
    words = word_tokenize(document)
    features = {}
    for w in word_features:
        features[w] = (w in words)
    return features

# Creating features for each review
featuresets = [(find_features(rev), category) for (rev, category) in documents]

# Shuffling the documents
random.shuffle(featuresets)

training_set = featuresets[:20000]
testing_set = featuresets[20000:]

classifier = nltk.NaiveBayesClassifier.train(training_set)

print("Classifier accuracy percent:",(nltk.classify.accuracy(classifier, testing_set))*100)

classifier.show_most_informative_features(15)

# training various models by passing in the sklearn models into the SklearnClassifier from NLTK

MNB_clf = SklearnClassifier(MultinomialNB())
MNB_clf.train(training_set)

BNB_clf = SklearnClassifier(BernoulliNB())
BNB_clf.train(training_set)

LogReg_clf = SklearnClassifier(LogisticRegression())
LogReg_clf.train(training_set)

SGD_clf = SklearnClassifier(SGDClassifier())
SGD_clf.train(training_set)

SVC_clf = SklearnClassifier(SVC())
SVC_clf.train(training_set)

from sklearn.metrics import f1_score, accuracy_score
ground_truth = [r[1] for r in testing_set]
predictions = {}
f1_scores = {}

for clf, listy in classifiers_dict.items():
    # getting predictions for the testing set by looping over each reviews featureset tuple
    # The first elemnt of the tuple is the feature set and the second element is the label
    predictions[clf] = [listy[0].classify(r[0]) for r in testing_set]
    f1_scores[clf] = f1_score(ground_truth, predictions[clf])
    print(f'f1_score {clf}: {f1_scores[clf]}')

    from nltk.classify import ClassifierI

# Defininig the ensemble model class

class EnsembleClassifier(ClassifierI):

    def __init__(self, *classifiers):
        self._classifiers = classifiers

    # returns the classification based on majority of votes
    def classify(self, features):
        votes = []
        for c in self._classifiers:
            v = c.classify(features)
            votes.append(v)
        return mode(votes)
    # a simple measurement the degree of confidence in the classification
    def confidence(self, features):
        votes = []
        for c in self._classifiers:
            v = c.classify(features)
            votes.append(v)

        choice_votes = votes.count(mode(votes))
        conf = choice_votes / len(votes)
        return conf

        # Load all classifiers from the pickled files

# function to load models given filepath
def load_model(file_path):
    classifier_f = open(file_path, "rb")
    classifier = pickle.load(classifier_f)
    classifier_f.close()
    return classifier


# Original Naive Bayes Classifier
ONB_Clf = load_model('pickled_algos/ONB_clf.pickle')

# Multinomial Naive Bayes Classifier
MNB_Clf = load_model('pickled_algos/MNB_clf.pickle')


# Bernoulli  Naive Bayes Classifier
BNB_Clf = load_model('pickled_algos/BNB_clf.pickle')

# Logistic Regression Classifier
LogReg_Clf = load_model('pickled_algos/LogReg_clf.pickle')

# Stochastic Gradient Descent Classifier
SGD_Clf = load_model('pickled_algos/SGD_clf.pickle')

# Initializing the ensemble classifier
ensemble_clf = EnsembleClassifier(ONB_Clf, MNB_Clf, BNB_Clf, LogReg_Clf, SGD_Clf)

# List of only feature dictionary from the featureset list of tuples
feature_list = [f[0] for f in testing_set]

# Looping over each to classify each review
ensemble_preds = [ensemble_clf.classify(features) for features in feature_list]

def sentiment(text):
    feats = find_features(text)
    return ensemble_clf.classify(feats), ensemble_clf.confidence(feats)