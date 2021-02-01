from scipy.optimize import minimize
import numpy as np

b_1 = (1, 0, 0)


def f(bloc):
    profil = (0.4,0.7,0.7)
    k = 0.5
    return np.sqrt(max(0,pow((1-(profil[0] + bloc[0] * k)),2)) + max(0,pow((1-(profil[1] + bloc[1] * k)),2)) + max(0,pow((1-(profil[2] + bloc[2] * k)),2)))

print(f(b_1))


# on optimize la function f en cherchant les 3 paramètres qui peuvent avoir une valeur entre 0 et 1
#print(minimize(f,b_1,method='SLSQP',bounds=[(0,1),(0,1),(0,1)]))


#Says one minus the sum of all variables must be zero
cons = ({'type': 'eq', 'fun': lambda x:  1 - sum(x)})

print(minimize(f,b_1,method='SLSQP',bounds=[(0,1),(0,1),(0,1)],constraints=cons))